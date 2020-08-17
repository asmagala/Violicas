const mongoose = require('mongoose');

const Order = require('../models/order.model');
const OrderItem = require('../models/orderitem.model');

/* MONGOOSE */
mongoose.connect('mongodb://localhost:27017/ViolinReplicas', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/*
const order = new Order({});
order.save();
*/
/*
const orderItem = new OrderItem({violinId: '5f384528ab710bb82877f1ec', quantity: 5, comments: 'Oj, oj...'});
orderItem.save();
*/
/*
let orderItem = new OrderItem({violinId: '5f384b40497b7d1748bc53d0', quantity: 1, comments: 'Ne, ne ...'});
orderItem.save();
*/
let order = new Order({
  clientName: 'Jack the Ripper',
  email: 'jtr@ripp.com',
  items: [
    '5f384528ab710bb82877f1ec',
    '5f384b40497b7d1748bc53d0'
  ]
});
order.save();

order = new Order({
  clientName: 'Fill Misericors',
  email: 'fillm@miser.com',
  items: [
    '5f384b40497b7d1748bc53d0'
  ]
});
order.save();

order = new Order({
  clientName: 'Momot Behemot',
  email: 'mobe@BLM.com',
  items: [
    '5f384528ab710bb82877f1ec'
  ]
});
order.save();
//db.close();