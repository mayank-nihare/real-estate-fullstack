const express = require('express');
const {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  getAllProjectsAdmin
} = require('../controllers/projectController');
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

// Get all projects
router.get('/', getAllProjects);

// For admin: get all projects (no visible filter)
router.get('/admin', getAllProjectsAdmin);

// Create a new project (with image upload)
router.post('/', upload.single('image'), createProject);

// Update a project
router.put('/:id', updateProject);

// Delete a project
router.delete('/:id', deleteProject);

module.exports = router; 