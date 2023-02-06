console.log("Day 56 - Rest API");

const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send(`<h1>Express REST API is running</h1>`);
});

app.get("/timers", (request, response) => {
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File not found",
        data: [],
      });
    }

    const timerData = JSON.parse(readData);

    response.json({
      status: "success",
      data: timerData,
    });
  });
});

app.post("/timers", (request, response) => {
  const body = request.body;
  console.log("body", body);

  const newUser = {
    id: body.id,
    title: body.title,
    project: body.project,
    elapsed: body.elapsed,
  };

  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File does not exist",
        data: [],
      });
    }

    const dataObject = JSON.parse(readData);
    dataObject.push(newUser);

    fs.writeFile(
      "./data/data.json",
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

app.put("/timers", (request, response) => {
  console.log(request.body);

  fs.readFile("./data/data.json", "utf8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File read error",
        data: [],
      });
    }

    const savedData = JSON.parse(readData);
    const changedData = savedData.map((d) => {
      if (d.id === request.body.id) {
        (d.title = request.body.title), (d.project = request.body.project);
      }
      return d;
    });

    fs.writeFile(
      "./data/data.json",
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

app.delete("/timers", (request, response) => {
  const body = request.body;
  console.log(body);
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File reader error",
        data: [],
      });
    }

    const readObject = JSON.parse(readData);
    const filteredObjects = readObject.filter((w) => w.id !== body.timerId);

    fs.writeFile(
      "./data/data.json",
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
