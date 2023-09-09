const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Garage");

const Garage = mongoose.model("Garage-One", {
  Capacities: {
    places: Number,
    total: Number,
  },
  Cars: {
    innovations: {
      technology: Array,
      options: Array,
    },
  },
  token: String,
  salt: String,
  hash: String,
});

module.exports = Garage;
