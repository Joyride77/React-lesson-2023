console.log("Day-51 : API Express JS");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

let data = [
  {
    id: 1,
    name: "khangaikhuu",
    major: "computer science",
  },
];

app.get("/", (request, response) => {
  response.send("Here I'm a brutally powerful express server");
});

app.get("/data", (request, response) => {
  response.json(data);
});

app.post("/data", (request, response) => {
  const length = data.length;
  const requestData = {
    id: length + 1,
    name: request.body.name,
    major: request.body.major,
  };
  data = [...data, requestData];
  response.json(data);
});

app.delete("/data", (request, response) => {
  const deleteData = data.filter((d) => d.id !== request.body.id);
  data = deleteData;
  response.json(data);
});

app.put("/data", (request, response) => {
  console.log("request", request.body);
  const newData = data.map((d) => {
    if (d.id === request.body.id) {
      (d.name = request.body.name), (d.major = request.body.major);
    }
    return d;
  });

  data = newData;

  response.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
