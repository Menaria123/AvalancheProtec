const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI="mongodb+srv://menariakusum7:dkoIplstESWrx5fu@cluster0.ypcnbo2.mongodb.net/Sensor", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connect(process.env.MONGO_URI="mongodb+srv://menariakusum7:dkoIplstESWrx5fu@cluster0.ypcnbo2.mongodb.net/Server", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connect(process.env.MONGO_URI="mongodb+srv://menariakusum7:dkoIplstESWrx5fu@cluster0.ypcnbo2.mongodb.net/MachineLearning", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const todoRoutes = require('./routes/Ava');
app.use('/todos', AvaRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
