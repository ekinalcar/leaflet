const { Router } = require("express");

const router = Router();
const { Location, validate } = require("../models/location");

router.get("/", async (req, res) => {
  try {
    const locations = await Location.find().sort("title");
    return res.send(locations);
  } catch (error) {
    return next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    let location = new Location({
      name: req.body.name,
      isGold: req.body.isGold,
      phone: req.body.phone,
    });

    location = await location.save();
    return res.send(location);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
