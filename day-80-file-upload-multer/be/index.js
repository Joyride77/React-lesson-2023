const express = require("express");
const cors = require("cors");
const multer = require("multer");

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

app.get("/", (req, res) => {
  res.send("<h1>Hello day-80 Fileupload Multer</h1>");
});

app.post("/fileUpload", upload.single("image"), (req, res, next) => {
  console.log(req.file);
  res.json({
    data: [],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
