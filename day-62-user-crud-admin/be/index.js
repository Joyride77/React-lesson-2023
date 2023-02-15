console.log("Day-62 User Login CRUD");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 8080;
const SALT_ROUNDS = 10;

app.use(cors());
app.use(express.json());

/// API get all users
app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File does not exist",
        data: [],
      });
    }
    const objectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: objectData,
    });
  });
});

/// API user register
app.post("/register", (request, response) => {
  const body = request.body;
  console.log("body", body);

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File does not exist",
        data: [],
      });
    }

    const dataObject = JSON.parse(readData);

    fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
      if (readError) {
        response.json({
          status: "file does not exist",
          data: [],
        });
      }

      const roleData = JSON.parse(readData);
      const roleName = roleData.filter((role) => role.id === body.role)[0];

      const userPassword = body.password;

      bcrypt.genSalt(SALT_ROUNDS, (error, salt) => {
        if (error) {
          response.json({
            status: "Generating salt error",
            data: [],
          });
        }
        bcrypt.hash(userPassword, salt, (hashError, hashData) => {
          if (hashError) {
            response.json({
              status: "Hashing has error",
              data: [],
            });
          }
          console.log("HASH", hashData);
          const newUser = {
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            password: hashData,
            address: body.address,
            role: roleName,
          };

          dataObject.push(newUser);

          fs.writeFile(
            "./data/users.json",
            JSON.stringify(dataObject),
            (writeError) => {
              if (writeError) {
                response.json({
                  status: "Error during file write",
                });
              }
              response.json({
                status: "success",
                data: dataObject,
              });
            }
          );
        });
      });
    });
  });
});

/// API login
app.post("/login", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File not found!",
        data: [],
      });
    }

    const usersArrayObject = JSON.parse(readData);
    const foundUser = usersArrayObject.filter(
      (user) => body.email === user.email
    );
    if (foundUser.length === 0) {
      response.json({
        status: "User not found!",
        data: [],
      });
    } else {
      const foundUserObj = foundUser[0];
      console.log(foundUserObj);

      const plainPassword = body.password;
      const savedPassword = foundUserObj.password;

      bcrypt.compare(
        plainPassword,
        savedPassword,
        (compareError, compareResult) => {
          if (compareError) {
            response.json({
              status: "User name or password do not match",
              data: [],
            });
          }

          if (compareResult) {
            console.log("It matches");
            response.json({
              status: "success",
              data: {
                email: foundUserObj.email,
                firstName: foundUserObj.firstname,
                lastName: foundUserObj.lastname,
              },
            });
          } else {
            response.json({
              status: "Username or Password do not match",
              data: [],
            });
          }
        }
      );
    }
  });
});

/// API get all user roles
app.get("/users/roles", (request, response) => {
  fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File does not exist",
        data: [],
      });
    }

    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
