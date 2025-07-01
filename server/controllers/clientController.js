const Client = require('../models/Client');

exports.getAllClients = async (req, res) => {
  try {
    const baseUrl = process.env.BASE_URL || 'http://localhost:5000';
    const clients = await Client.find();
    const clientsWithImageUrl = clients.map(client => ({
      ...client._doc,
      image: `${baseUrl}/images/${client.image}`
    }));
    res.json(clientsWithImageUrl);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// For admin, add a new endpoint to get all clients (no filter)
exports.getAllClientsAdmin = async (req, res) => {
  try {
    const baseUrl = process.env.BASE_URL || 'http://localhost:5000';
    const clients = await Client.find();
    const clientsWithImageUrl = clients.map(client => ({
      ...client._doc,
      image: `${baseUrl}/images/${client.image}`
    }));
    res.json(clientsWithImageUrl);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createClient = async (req, res) => {
  try {
    let data = req.body;
    if (req.file) {
      data.image = req.file.filename;
    }
    data.visible = false; // New clients are not visible by default
    const client = new Client(data);
    await client.save();
    res.status(201).json(client);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(client);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ message: 'Client deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 