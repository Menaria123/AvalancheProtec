const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  sensorId: { type: mongoose.Schema.Types.ObjectId, auto: true, primaryKey: true },
  macAddress: { type: String, required: true },
  vibration: { type: Number, required: true },
  location: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Sensor = mongoose.model('Sensor', sensorSchema);
module.exports = Sensor;
