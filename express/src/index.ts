import express from "express";

const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.get("/api", function (req, res) {
  res.send("Hello world");
});

app.listen(port, function () {
  console.log(`server started at http://localhost:${port}`);
});
