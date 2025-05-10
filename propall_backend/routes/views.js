// backend/routes/views.js
const express = require('express');
const router = express.Router();
const View = require('../models/View');

// Save views to MongoDB
router.post('/', async (req, res) => {
  try {
    const { views } = req.body;
    console.log('Received views:', views);
    if (!views || !Array.isArray(views)) {
      return res.status(400).json({ error: 'Invalid views format' });
    }

    // Optional: clear previous views
    // await View.deleteMany();

    await View.insertMany(views.map(view => ({ ...view })));
    res.json({ message: 'Views saved' });
  } catch (err) {
    console.error('Error saving views:', err);
    res.status(500).json({ error: 'Failed to save views' });
  }
});

// Load views from MongoDB
router.get('/', async (req, res) => {
  try {
    const views = await View.find();
    res.status(200).json({ views });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load views' });
  }
});

module.exports = router;
