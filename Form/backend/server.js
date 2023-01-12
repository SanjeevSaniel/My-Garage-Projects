const express = require("express");
const app = express();
const cors = require("cors");
const Router = require("./routes");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(Router);

mongoose.connect("mongodb://127.0.0.1:27017/users", {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully.");
});

app.listen(port, console.log("Server running"));
