const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const requiredNumber = {
  type: Number,
  required: true,
};

const requiredString = {
  type: String,
  required: true,
};

const LocationSchema = new mongoose.Schema(
  {
    title: { ...requiredString },
    description: { ...requiredString },
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
    address: {
      type: String,
      required: true,
    },
    location: {
      // GeoJSON Point
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
        index: "2dsphere",
      },
      formattedAddress: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      countryCode: String,
      country: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const validateLocation = (location) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    latitude: Joi.number().min(-90).max(90).required(),
    longitude: Joi.number().min(-180).max(180).required(),
    address: Joi.string().required(),
    createdAt: Joi.date(),
  });
  return schema.validate(location);
};

exports.Location = mongoose.model("Location", LocationSchema);
exports.validate = validateLocation;
