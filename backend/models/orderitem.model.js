const mongoose = require('mongoose');
const Violin = require('../models/violin.model');

const orderitemSchema = new mongoose.Schema({
  violinId: { type: String, required: true,  ref: 'Violin' },
  quantity: { type: Number },
  comments: { type: String }
});

module.exports = mongoose.model('OrderItem', orderitemSchema);
