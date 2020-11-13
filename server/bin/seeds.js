require("dotenv").config({ path: process.env.MONGODB_URI });
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

//connection of the DB
mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("Connected to DB");
});

const data = require("./data.json");
const Data = require("../models/Data");

//Inserts all the data
Data.insertMany(data).then((res) => {
  console.log("CURLY");
});
