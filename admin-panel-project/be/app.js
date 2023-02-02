// import necessary module
const express = require("express");
const cors = require("cors");
const fs = require("fs");

/// configuration of moduls
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/products", (request, response) => {
  fs.readFile("./data/products.json", "utf-8", (readError, readData) => {
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

app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File does not exist",
        data: [],
      });
    }

    const objectDataUser = JSON.parse(readData);

    response.json({
      status: "success",
      data: objectDataUser,
    });
  });
});

app.post("/products", (request, response) => {
  const body = request.body;
  const newProduct = {
    id: Date.now().toString(),
    title: body.title,
    subTitle: body.subTitle,
    price: body.price,
    description: body.description,
    color: body.color,
  };

  fs.readFile("./data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File does not exist",
        data: [],
      });
    }
    const dataObject = JSON.parse(readData);
    dataObject.push(newProduct);

    fs.writeFile(
      "./data/products.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "Error during file write",
            data: [],
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

app.post("/users", (request, response) => {
  const body = request.body;
  console.log(body);
  const newUser = {
    id: Date.now().toString(),
    firstName: body.firstName,
    lastName: body.lastName,
    phoneNumber: body.phoneNumber,
    email: body.email,
    description: body.description,
    // role: body.role,
    password: body.password,
  };

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File does not exist",
        data: [],
      });
    }
    const dataObjectUser = JSON.parse(readData);
    dataObjectUser.push(newUser);

    fs.writeFile(
      "./data/users.json",
      JSON.stringify(dataObjectUser),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "Error during file write",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: dataObjectUser,
        });
      }
    );
  });
});

app.put("/products", (request, response) => {
  console.log(request.body);

  fs.readFile("./data/products.json", "utf8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File read error",
        data: [],
      });
    }

    const savedData = JSON.parse(readData);
    // console.log("saved", savedData);
    const changedData = savedData.map((d) => {
      if (d.id === request.body.id) {
        (d.title = request.body.title),
          (d.subTitle = request.body.subTitle),
          (d.price = request.body.price),
          (d.description = request.body.description),
          (d.color = request.body.color);
      }
      return d;
    });

    fs.writeFile(
      "./data/products.json",
      JSON.stringify(changedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "File write error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: changedData,
        });
      }
    );
  });
});

app.put("/users", (request, response) => {
  console.log(request.body);

  fs.readFile("./data/users.json", "utf8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File read error",
        data: [],
      });
    }

    const savedUser = JSON.parse(readData);
    const changedUser = savedUser.map((d) => {
      if (d.id === request.body.id) {
        (d.firstName = request.body.firstName),
          (d.lastName = request.body.lastName),
          (d.phoneNumber = request.body.phoneNumber),
          (d.email = request.body.email),
          (d.description = request.body.description),
          (d.password = request.body.password);
      }
      return d;
    });
    console.log("changed", readData);
    fs.writeFile(
      "./data/users.json",
      JSON.stringify(changedUser),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "File write error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: changedUser,
        });
      }
    );
  });
});

app.delete("/products", (request, response) => {
  const body = request.body;
  fs.readFile("./data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File reader error",
        body: [],
      });
    }

    const readObject = JSON.parse(readData);
    const filteredObjects = readObject.filter((w) => w.id !== body.productId);

    fs.writeFile(
      "./data/products.json",
      JSON.stringify(filteredObjects),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            body: [],
          });
        }

        response.json({
          status: "success",
          data: filteredObjects,
        });
      }
    );
  });
});

app.delete("/users", (request, response) => {
  const body = request.body;
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File reader error",
        body: [],
      });
    }

    const readObjectUser = JSON.parse(readData);
    const filteredObjectsUser = readObjectUser.filter(
      (w) => w.id !== body.userId
    );

    fs.writeFile(
      "./data/users.json",
      JSON.stringify(filteredObjectsUser),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            body: [],
          });
        }

        response.json({
          status: "success",
          data: filteredObjectsUser,
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
