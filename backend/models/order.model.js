const OrderItem = require('../models/orderitem.model');
const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
  orderDate: { type: Date, default: Date.now },
  clientName: { type: String },
  email: { type: String },
  items: [{ type: String, required: true, ref: 'OrderItem' }]
});

module.exports = mongoose.model('Order', orderSchema);
