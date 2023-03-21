const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const app = express();
const PORT = 8080;
const upload = multer({ storage: storage });

app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(cors());

app.get("/files", async (req, res) => {
  const path = "./uploads/";
  const imgs = [];
  fs.readdirSync(path).forEach((file) => {
    const imgURL = `http://localhost:${PORT}/uploads/${file}`;
    imgs.push(imgURL);
  });

  res.status(200).json({
    data: imgs,
  });
});

app.get("/", (req, res) => {
  res.send("<h1>Hello day-80 Fileupload Multer</h1>");
});

app.post("/fileUpload", upload.single("image"), async (req, res, next) => {
  const path = "./uploads/";
  const imgs = [];

  fs.readdirSync(path).forEach((file) => {
    const urlPath = `http://localhost:${PORT}/uploads/${file}`;
    imgs.push(urlPath);
  });

  res.json({
    data: imgs,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
