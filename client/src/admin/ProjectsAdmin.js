import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL } from '../index';

const ProjectsAdmin = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", image: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchProjects = () => {
    axios
      .get(`${API_BASE_URL}/api/projects`)
      .then((res) => setProjects(res.data))
      .catch(() => setProjects([]));
  };

  useEffect(() => {
    fetchProjects();
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
      if (form.image) formData.append("image", form.image);
      await axios.post(`${API_BASE_URL}/api/projects`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess("Project added!");
      setForm({ name: "", description: "", image: null });
      fetchProjects();
    } catch (err) {
      setError("Failed to add project.");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?"))
      return;
    try {
      await axios.delete(`${API_BASE_URL}/api/projects/${id}`);
      setProjects(projects.filter((p) => p._id !== id));
      toast.success("Project deleted!");
    } catch {
      toast.error("Failed to delete project.");
    }
  };

  return (
    <div>
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
      <h2 className="text-2xl font-bold mb-4">Project Management</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow mb-8 flex flex-col gap-3 max-w-md"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Project Name"
          className="p-2 border rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          placeholder="Project Description"
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
          {loading ? "Adding..." : "Add Project"}
        </button>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white rounded shadow p-4 flex flex-col items-center"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-32 object-cover rounded mb-2"
            />
            <h3 className="font-bold text-blue-700 text-lg mb-1">
              {project.name}
            </h3>
            <p className="text-gray-600 text-sm mb-2">{project.description}</p>
            <button
              onClick={() => handleDelete(project._id)}
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

export default ProjectsAdmin;
