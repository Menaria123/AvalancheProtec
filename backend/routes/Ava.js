const express = require('express');
const router = express.Router();
const Server = require('../models/server');
const Sensor = require('../models/Sensor');
const MachineLearning = require('../models/machine_learning')

router.get('/', async (req, res) => {
  const sensorId = await Sensor.find();
  res.json(Sensors);
});

router.post('/', async (req, res) => {
  const newAva = new ava({
    text: req.body.text,
  });
  const savedAva = await newAva.save();
  res.json(savedAva);
});

module.exports = router;
