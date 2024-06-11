const mongoose = require('mongoose');

const serverSchema = new mongoose.Schema({
  serverId: { type: mongoose.Schema.Types.ObjectId, auto: true, primaryKey: true }, // Primary key
  macAddress: { type: String, required: true },
  location: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  temperature: { type: Number, required: true },
  atmosphericPressure: { type: Number, required: true },
  windSpeed: { type: Number, required: true },
  windDirection: { type: String, required: true }
});

const Server = mongoose.model('Server', serverSchema);
module.exports = Server;
