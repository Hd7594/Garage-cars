const express = require("express");
const router = express.Router();

const Garage = require("../models/Garage");

router.post("/garage/newcar", async (req, res) => {
  try {
    const { places, total, technology, options, token, salt, hash } = req.body;

    const fictiveGarage = new Garage({
      Capacities: {
        places: places,
        total: total,
      },
      innovations: {
        technology: ["Garage Solaire", "peu énergivore"],
        options: ["2 étages", "allées larges"],
      },
      token: token,
      salt: salt,
      hash: hash,
    });
    await fictiveGarage.save();
    res.json(fictiveGarage);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "request not operates" });
  }
});

module.exports = router;
