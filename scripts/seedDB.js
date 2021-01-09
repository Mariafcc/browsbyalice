const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/browservices"
);

const serviceSeed = [
  {
    name: "Microblading",
    description: "Microblading is done by implanting pigment into the skin in fine hair-like strokes which gives the appearance of natural brow hairs. This is done by using a handheld tool with fine needles in the form of a blade. ",
    time:"2",
    price: "$600"
  }
];
