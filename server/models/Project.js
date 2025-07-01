const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  visible: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema); 