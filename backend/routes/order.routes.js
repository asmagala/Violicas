const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');

router.get('/orders', async (req, res) => {
  try {
    const result = await Order.find();
      //.find({status: 'published'})
      //.select('author created title photo')
      //.sort({created: -1});
    if(!result) res.status(404).json({ order: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/orders/:id', async (req, res) => {
  try {
    const result = await Order
      .findById(req.params.id)
      .populate('items')
      //.populate('items.violinId');
      
    if(!result) res.status(404).json({ order: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
