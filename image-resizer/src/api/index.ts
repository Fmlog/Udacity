import express from "express";
import resize from "./resize";

const image = express.Router();

image.get("/api", resize, (req, res) => {
  res.status(200);
});

export default image;
