const express = require('express');
const {
  getAllSubscribers,
  createSubscriber
} = require('../controllers/newsletterController');
const router = express.Router();

// Get all newsletter subscribers
router.get('/', getAllSubscribers);

// Subscribe to newsletter
router.post('/', createSubscriber);

// Delete a subscriber
router.delete('/:id', async (req, res) => {
  try {
    const Newsletter = require('../models/Newsletter');
    await Newsletter.findByIdAndDelete(req.params.id);
    res.json({ message: 'Subscriber deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router; 