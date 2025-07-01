const express = require('express');
const {
  getAllContacts,
  createContact,
  getAllContactsAdmin
} = require('../controllers/contactController');
const router = express.Router();

// Get all contact form submissions
router.get('/', getAllContacts);

// Submit a new contact form
router.post('/', createContact);

// Delete a contact
router.delete('/:id', async (req, res) => {
  try {
    const Contact = require('../models/Contact');
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// For admin: get all contacts (no visible filter)
router.get('/admin', getAllContactsAdmin);

module.exports = router; 