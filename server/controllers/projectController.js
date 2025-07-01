const Project = require('../models/Project');

exports.getAllProjects = async (req, res) => {
  try {
    const baseUrl = process.env.BASE_URL || 'http://localhost:5000';
    const projects = await Project.find();
    const projectsWithImageUrl = projects.map(project => ({
      ...project._doc,
      image: `${baseUrl}/images/${project.image}`
    }));
    res.json(projectsWithImageUrl);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// For admin, add a new endpoint to get all projects (no filter)
exports.getAllProjectsAdmin = async (req, res) => {
  try {
    const baseUrl = process.env.BASE_URL || 'http://localhost:5000';
    const projects = await Project.find();
    const projectsWithImageUrl = projects.map(project => ({
      ...project._doc,
      image: `${baseUrl}/images/${project.image}`
    }));
    res.json(projectsWithImageUrl);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProject = async (req, res) => {
  try {
    let data = req.body;
    if (req.file) {
      data.image = req.file.filename;
    }
    data.visible = false; // New projects are not visible by default
    const project = new Project(data);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 