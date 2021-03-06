const express = require("express");
const {
  getLocations,
  getLocation,
  createLocation,
  getLocationsInRadius,
} = require("../controllers/location");

const { Location } = require("../models/Location");
const advancedResults = require("../middleware/advancedResults");

const router = express.Router();

router.route("/radius/:zipcode/:distance").get(getLocationsInRadius);

router
  .route("/")
  .get(advancedResults(Location, ""), getLocations)
  .post(createLocation);

router.route("/:id").get(getLocation);

module.exports = router;
