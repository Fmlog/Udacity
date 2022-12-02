import express from "express";
import logger from "../logger";

const routes = express.Router();

routes.get("/countries", (req, res) => {
  res.status(200).send("Countries endpoint");
});

routes.get("/continent", logger, (req, res) => {
  res.status(200).send("Continent endpoint");
});

routes.get("/regional", logger, function (req, res) {
  res.status(200).send("Regional block");
});

export default routes;
