import express from "express";
import routes from "./routes/index";

const app = express();
const port = 3000;

app.use("/", routes);

app.listen(port, function () {
  console.log(`Server is running on http://localhost:${port}`);
});
