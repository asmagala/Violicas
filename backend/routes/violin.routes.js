const express = require('express');
const router = express.Router();

const Violin = require('../models/violin.model');

router.get('/violins', async (req, res) => {
  try {
    const result = await Violin.find();
    //.select('author created title photo')
    //.sort({created: -1});
    if(!result) res.status(404).json({ violin: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/violins/:id', async (req, res) => {
  try {
    const result = await Violin
      .findById(req.params.id);
    if(!result) res.status(404).json({ violin: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
