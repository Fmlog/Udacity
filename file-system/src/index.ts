import express from "express";
import { promises as fs } from "fs";
import csv from "csvtojson";

const app = express();
const port = 3000;

const file = "./users.csv";

async function conver2J(file: string) {
  const jsonArray = await csv().fromFile(file);
  await fs.writeFile("users.json", JSON.stringify(jsonArray));
}
// start the Express server
app.get("/convert", async function (req, res) {
  console.log("converting");
  conver2J(file);
  console.log("converted");
  setImmediate(function () {
    res.status(200).send("converted");
  });
});
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
