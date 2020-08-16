const { Location, validate } = require("../models/Location");
const asyncHandler = require("../middleware/async");
const geocoder = require("../utils/geocoder");
const ErrorResponse = require("../utils/errorResponse");

exports.getLocations = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

exports.getLocation = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const location = await Location.findById(id);

  if (!location) {
    return next(new ErrorResponse(`Location not found with id of ${id}`, 404));
  }
  res.status(200).json({ success: true, data: location });
});

exports.createLocation = asyncHandler(async (req, res, next) => {
  const { error } = validate(req.body);
  if (error)
    return res
      .status(400)
      .send({ success: false, error: error.details[0].message });

  const { title, description, latitude, longitude, createdAt } = req.body;

  const fieldsToCreate = {
    title,
    description,
    latitude,
    longitude,
    createdAt,
  };

  const location = await Location.create(fieldsToCreate);

  res.status(201).json({
    success: true,
    data: location,
  });
});

/*exports.getBootcampsInRadius = asyncHandler(async (req, res, next) => {
  const { zipcode, distance } = req.params;

  // Get lat/lng from geocoder
  const loc = await geocoder.geocode(zipcode);
  const lat = loc[0].latitude;
  const lng = loc[0].longitude;

  // Calc radius using radians
  // Divide dist by radius of Earth
  // Earth Radius = 3,963 mi / 6,378 km
  const radius = distance / 3963;

  const bootcamps = await Bootcamp.find({
    location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });

  res.status(200).json({
    success: true,
    count: bootcamps.length,
    data: bootcamps,
  });
});*/
