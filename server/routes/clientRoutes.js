const express = require('express');
const {
  getAllClients,
  createClient,
  updateClient,
  deleteClient
} = require('../controllers/clientController');
const router = express.Router();

// Multer setup for image uploads
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Get all clients
router.get('/', getAllClients);

// Create a new client (with image upload)
router.post('/', upload.single('image'), createClient);

// Update a client
router.put('/:id', updateClient);

// Delete a client
router.delete('/:id', deleteClient);

// For admin: get all clients (no visible filter)
router.get('/admin', require('../controllers/clientController').getAllClientsAdmin);

module.exports = router; 