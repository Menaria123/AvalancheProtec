const mongoose = require('mongoose');

const mlSchema = new mongoose.Schema({
  mlId: { 
    type: mongoose.Schema.Types.ObjectId, 
    auto: true,
    primaryKey: true
  }, 
  prediction: 
  { type: String, required: true },
  location: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const MachineLearning = mongoose.model('MachineLearning', mlSchema);
module.exports = MachineLearning;
