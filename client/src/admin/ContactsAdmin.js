import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL } from '../index';

const ContactsAdmin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/contacts`)
      .then((res) => {
        setContacts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch contacts.");
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;
    try {
      await axios.delete(`${API_BASE_URL}/api/contacts/${id}`);
      setContacts(contacts.filter((c) => c._id !== id));
      toast.success("Contact deleted!");
    } catch {
      toast.error("Failed to delete contact.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Form Details</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
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
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded shadow">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Full Name</th>
                  <th className="py-2 px-4 border-b">Email Address</th>
                  <th className="py-2 px-4 border-b">Mobile Number</th>
                  <th className="py-2 px-4 border-b">City</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact._id}>
                    <td className="py-2 px-4 border-b">{contact.fullName}</td>
                    <td className="py-2 px-4 border-b">{contact.email}</td>
                    <td className="py-2 px-4 border-b">{contact.mobile}</td>
                    <td className="py-2 px-4 border-b">{contact.city}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleDelete(contact._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactsAdmin;
