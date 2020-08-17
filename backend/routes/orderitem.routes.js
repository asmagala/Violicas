const express = require('express');
const router = express.Router();

const OrderItem = require('../models/orderitem.model');

router.get('/orderitems', async (req, res) => {
  try {
    const result = await OrderItem.find();
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

router.get('/orderitems/:id', async (req, res) => {
  try {
    const result = await OrderItem
      .findById(req.params.id)
      .populate('violinId');
    if(!result) res.status(404).json({ order: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
