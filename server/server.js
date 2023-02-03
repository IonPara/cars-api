const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
// Use body-parser middleware to extracts the entire body portion of an incoming request and expose it on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect mongoose with the database
mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://para_ion:i6eznwCoa1dJDNcc@cluster0.ebtou5f.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const PORT = process.env.PORT || 5000;

app.use(express.json());

// Import all of the routes
const carsRouter = require("./routes/router");
app.use("/", carsRouter);

app.get("/", (req, res) => {
  res.send("Hello and Welcome!");
});

app.listen(PORT, () => console.log("Listening engaged"));
