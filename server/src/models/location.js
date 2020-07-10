const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const requiredNumber = {
  type: Number,
  required: true,
};

const Location = mongoose.model(
  "Location",
  new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: String,
      comments: String,
      image: String,
      rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0,
      },
      latitude: {
        ...requiredNumber,
        min: -90,
        max: 90,
      },
      longitude: {
        ...requiredNumber,
        min: -180,
        max: 180,
      },
      visitDate: {
        required: true,
        type: Date,
      },
    },
    {
      timestamps: true,
    }
  )
);

const validateLocation = (location) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
    comments: Joi.string(),
    image: Joi.string(),
    rating: Joi.number().min(0).max(10),
    latitude: Joi.number().min(-90).max(90).required(),
    longitude: Joi.number().min(-180).max(180).required(),
    visitDate: Joi.date().required(),
  });
  return schema.validate(location);
};

exports.Location = Location;
exports.validate = validateLocation;
