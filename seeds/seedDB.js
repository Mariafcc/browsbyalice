const db = require("../models/index");
const Service = db.service

const serviceSeed = () => {

  Service.create({
    "name" : "Microblading",
    "description" : "Microblading is done by implanting pigment into the skin in fine hair-like strokes which gives the appearance of natural brow hairs. This is done by using a handheld tool with fine needles in the form of a blade. ",
    "time" : "2",
    "price" : "$600"
  });
};

module.exports = serviceSeed