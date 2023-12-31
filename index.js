require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

const carsRoute = require("../Cars-Garage/routes/cars");

app.use(carsRoute);

app.listen(process.env.PORT, (req, res) => {
  console.log("server started 🌈");
});
