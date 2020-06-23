const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { url: dbUrl } = require("./config/dbConfig");
const routes = require("./api/routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose
  .connect(dbUrl)
  .then(() => console.log("Connected to database"))
  .catch(err => console.log(err));

app.use("/api", routes);

app.listen(5000, () => console.log("Listening on port 5000"));
