const db = require("../models/index");
const Service = db.service

const serviceSeed = () => {

  Service.create({
    "id":1,
    "name" : "Microblading",
    "description" : "Microblading is done by implanting pigment into the skin in fine hair-like strokes which gives the appearance of natural brow hairs. This is done by using a handheld tool with fine needles in the form of a blade. ",
    "time" : "2",
    "price" : "$600"
  });
  Service.create({
    "id":2,
    "name" : "Ombré Powder ",
    "description" : "The ombré brow is a form of PMU that consists of different needle configurations to achieve a powdered brow look. The brow is fully shaded with a natural gradient effect towards the front. Ombré powder is a great option for people with oily skin or people who don’t retain pigment well. ",
    "time" : "3",
    "price" : "$600"
  });
  Service.create({
    "id":3,
    "name" : "Blade & Shade Combo",
    "description" : "A combination PMU technique of hair strokes (Microblading) and shading to add density to the hair strokes creating a fuller looking brow.",
    "time" : "3",
    "price" : "$800"
  });
  Service.create({
    "id":4,
    "name" : "Blade & Shade Combo Touch-up",
    "description" : "Along with Blade & Shade Combo, you will need an aditional touch up.",
    "time" : "1",
    "price" : "$100"
  });
  Service.create({
    "id":5,
    "name" : "Brow Wax ",
    "description" : "Custom mapping, shaping, trimming and tweezing included.",
    "time" : "20",
    "price" : "$30"
  });
  Service.create({
    "id":6,
    "name" : "Brow Tint ",
    "description" : " A process that uses semi-permanent dye to enhance, shape, and define the brow. Lasts 2-4 weeks.",
    "time" : "20",
    "price" : "$20"
  });
  Service.create({
    "id":7,
    "name" : "Brow Wax & Tint",
    "description" : "Wax and Tint included.",
    "time" : "45",
    "price" : "$40"
  });
  Service.create({
    "id":4,
    "name" : "Blade & Shade Combo Touch-up",
    "description" : "Along with Blade & Shade Combo, you will need an aditional touch up.",
    "time" : "1",
    "price" : "$100"
  });
  Service.create({
    "id":4,
    "name" : "Blade & Shade Combo Touch-up",
    "description" : "Along with Blade & Shade Combo, you will need an aditional touch up.",
    "time" : "1",
    "price" : "$100"
  });
};

module.exports = serviceSeed