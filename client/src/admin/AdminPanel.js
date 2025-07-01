import React from "react";
import { Link, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import ProjectsAdmin from "./ProjectsAdmin";
import ClientsAdmin from "./ClientsAdmin";
import ContactsAdmin from "./ContactsAdmin";
import SubscribersAdmin from "./SubscribersAdmin";

const AdminPanel = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing tokens)
    navigate("/");
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar Navigation */}
      <nav className="bg-blue-900 text-white w-full md:w-64 p-6 flex md:flex-col gap-4 md:gap-8 justify-center md:justify-start">
        <Link to="/admin/projects" className="hover:underline">
          Projects
        </Link>
        <Link to="/admin/clients" className="hover:underline">
          Clients
        </Link>
        <Link to="/admin/contacts" className="hover:underline">
          Contacts
        </Link>
        <Link to="/admin/subscribers" className="hover:underline">
          Subscribers
        </Link>
        <button
          onClick={handleLogout}
          className="mt-8 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </nav>
      {/* Main Content */}
      <main className="flex-1 p-6">
        <Routes>
          <Route index element={<Navigate to="projects" replace />} />
          <Route path="projects" element={<ProjectsAdmin />} />
          <Route path="clients" element={<ClientsAdmin />} />
          <Route path="contacts" element={<ContactsAdmin />} />
          <Route path="subscribers" element={<SubscribersAdmin />} />
          <Route path="*" element={<Navigate to="projects" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminPanel;
