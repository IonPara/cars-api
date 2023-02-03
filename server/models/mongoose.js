const mongoose = require("mongoose");
// Create a schema for our documents
let carSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  registration: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// module.exports makes the model available outside of your module
const Car = mongoose.model("Car", carSchema);
module.exports = Car;
