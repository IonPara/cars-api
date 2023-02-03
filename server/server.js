const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
// Use body-parser middleware to extracts the entire body portion of an incoming request and expose it on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log(process.env);
// import dotenv so we could use the key from the app.env file
require("dotenv").config({ path: "./app.env" });
// Connect mongoose with the database
mongoose.set("strictQuery", true);
mongoose.connect(process.env.API_KEY, { useNewUrlParser: true });
mongoose.connection.on("error", function () {
  console.log("Could not connect to the database. Exiting now...");
  process.exit();
});
mongoose.connection.once("open", function () {
  console.log("Successfully connected to the database");
});
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Import all of the routes
const carsRouter = require("./routes/router");
app.use("/", carsRouter);

app.get("/", (req, res) => {
  res.send("Hello and Welcome!");
});

app.listen(PORT, () => console.log("Listening engaged"));
