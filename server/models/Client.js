const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  designation: { type: String, required: true },
  visible: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Client', ClientSchema); 