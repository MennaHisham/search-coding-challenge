const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  _id: String,
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  company: String,
  email: String,
  phone: String,
  address: String
});

const Data = mongoose.model("Data", dataSchema);
module.exports = Data;
