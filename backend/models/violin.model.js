const mongoose = require('mongoose');

const violinSchema = new mongoose.Schema({
  luthier: { type: String },
  buildYear: { type: Number },
  locality: { type: String},
  country: { type: String },
  ownership: { type: String},
  inventoryNo: { type: String},
  history: { type: String},
  description: { type: String},
  inscription: {type: String},
  size: { type: String},
  materialUsed: { type: String},
  violinists: { type: String},
  image: {type: Array},
  violinNo: { type: Number},
  price: { type: Number }
});

module.exports = mongoose.model('Violin', violinSchema);
