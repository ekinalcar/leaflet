const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const geocoder = require("../utils/geocoder");

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
LocationSchema.pre("save", async function (next) {
  //const loc = await geocoder.geocode(this.address);
  const loc = await geocoder.reverse({
    lat: this.latitude,
    lon: this.longitude,
  });

  this.location = {
    type: "Point",
    coordinates: [loc[0].latitude, loc[0].latitude.longitude],
    formattedAddress: loc[0].formattedAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    state: loc[0].state,
    zipcode: loc[0].zipcode,
    countryCode: loc[0].countryCode,
    country: loc[0].country,
  };
  next();
});

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
