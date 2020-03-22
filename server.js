require("dotenv").config();

require("./db");
const express = require("express");
const logger = require("morgan");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(logger("dev"));

const routes = require("./routes");
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Listening to: ${process.env.PORT}`);
});
