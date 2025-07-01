const Newsletter = require('../models/Newsletter');

exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSubscriber = async (req, res) => {
  try {
    const newsletter = new Newsletter(req.body);
    await newsletter.save();
    res.status(201).json(newsletter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 