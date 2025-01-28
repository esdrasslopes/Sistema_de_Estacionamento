const mongoose = require("mongoose");

const { Schema } = mongoose;

const parkSchema = new Schema({
  carModel: {
    type: String,
    required: true,
  },
  carBrand: {
    type: String,
    required: true,
  },
  carPlate: {
    type: String,
    required: true,
    match: /^[A-Z]{3}-[0-9]{4}$/,
  },
  vacancyNumber: {
    type: String,
    required: true,
  },
  entryTime: {
    type: String,
    required: true,
  },
  exitTime: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
});

const Park = mongoose.model("Park", parkSchema);

module.exports = Park;
