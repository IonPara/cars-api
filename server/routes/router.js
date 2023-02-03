const express = require("express");
const router = express.Router();
// Import all of the controllers
const {
  getCars,
  getSortedCars,
  createCar,
  deleteCar,
  updateCar,
  updateMany,
} = require("../controllers/cars.controllers");
// Create a router for each controller
router.get("/cars", getCars);
router.get("/car/:year", getSortedCars);
router.post("/car", createCar);
router.delete("/car/:id", deleteCar);
router.put("/car/:id", updateCar);
router.put("/cars", updateMany);

// export the routers
module.exports = router;
