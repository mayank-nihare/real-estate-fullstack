import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientsAdmin = () => {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    designation: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchClients = () => {
    axios
      .get("http://localhost:5000/api/clients")
      .then((res) => setClients(res.data))
      .catch(() => setClients([]));
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("designation", form.designation);
      if (form.image) formData.append("image", form.image);
      await axios.post("http://localhost:5000/api/clients", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess("Client added!");
      setForm({ name: "", description: "", designation: "", image: null });
      fetchClients();
    } catch (err) {
      setError("Failed to add client.");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this client?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/clients/${id}`);
      setClients(clients.filter((c) => c._id !== id));
      toast.success("Client deleted!");
    } catch {
      toast.error("Failed to delete client.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Client Management</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow mb-8 flex flex-col gap-3 max-w-md"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Client Name"
          className="p-2 border rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          placeholder="Client Description"
          className="p-2 border rounded"
        />
        <input
          name="designation"
          value={form.designation}
          onChange={handleChange}
          required
          placeholder="Designation (e.g. CEO, Designer)"
          className="p-2 border rounded"
        />
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Client"}
        </button>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
      </form>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clients.map((client) => (
          <div
            key={client._id}
            className="bg-white rounded shadow p-4 flex flex-col items-center"
          >
            <img
              src={client.image}
              alt={client.name}
              className="w-20 h-20 object-cover rounded-full mb-2 border-2 border-blue-200"
            />
            <h3 className="font-bold text-blue-700 text-lg mb-1">
              {client.name}
            </h3>
            <p className="text-gray-600 text-sm mb-2">{client.description}</p>
            <span className="text-xs text-gray-500">{client.designation}</span>
            <button
              onClick={() => handleDelete(client._id)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsAdmin;
