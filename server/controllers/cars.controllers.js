const Car = require("../models/mongoose");

// This is function is built for the GET request, it will send the array from the database as a response
async function getCars(req, res) {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// This function will
async function getSortedCars(req, res) {
  try {
    const car = await Car.find({ year: { $lt: req.params.year + 1 } });
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// // This is the function for the POST request, it will add the object from the request's body to the collection in the database
async function createCar(req, res) {
  const car = new Car({
    _id: req.body._id,
    make: req.body.make,
    year: req.body.year,
    registration: req.body.registration,
    owner: req.body.owner,
    availability: req.body.availability,
    image: req.body.image,
  });
  try {
    await car.save();
    res.send(
      JSON.stringify({ status: "success", message: `Car added successfully` })
    );
  } catch (error) {
    console.log(error);
  }
}

// // This is the function for the DELETE request, it will delete a document with a specific id from the database
async function deleteCar(req, res) {
  try {
    await Car.deleteOne({ _id: req.params.id });
  } catch (error) {
    res.send(
      JSON.stringify({
        status: "success",
        message: `Car deleted successfully`,
      })
    );
  }
}
// // This is the function for the PUT request, it will update a document with a specific id from the database
async function updateCar(req, res) {
  await Car.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        make: req.body.make,
        year: req.body.year,
        registration: req.body.registration,
        owner: req.body.owner,
        availability: req.body.availability,
        image: req.body.image,
      },
      function(error, doc) {
        if (error) {
          res.send(
            JSON.stringify({
              status: 400,
              message: "Something went wrong when updating data.",
            })
          );
        }
        res.send(
          JSON.stringify({
            status: "success",
            message: `Car updated successfully`,
          })
        );
      },
    }
  );
}
// This function will update all of the documents that have the availability false
async function updateMany(req, res) {
  try {
    await Car.updateMany(
      { availability: false },
      {
        availability: true,
      }
    );
  } catch (error) {
    res.send(error);
  }
}
// Export all of the controllers
module.exports = {
  getCars,
  getSortedCars,
  createCar,
  updateCar,
  deleteCar,
  updateMany,
};
