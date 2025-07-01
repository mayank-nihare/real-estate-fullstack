import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubscribersAdmin = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/newsletter")
      .then((res) => {
        setSubscribers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch subscribers.");
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this subscriber?"))
      return;
    try {
      await axios.delete(`http://localhost:5000/api/newsletter/${id}`);
      setSubscribers(subscribers.filter((s) => s._id !== id));
      toast.success("Subscriber deleted!");
    } catch {
      toast.error("Failed to delete subscriber.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Subscribed Emails</h2>
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
                  <th className="py-2 px-4 border-b">Email Address</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((subscriber) => (
                  <tr key={subscriber._id}>
                    <td className="py-2 px-4 border-b">{subscriber.email}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleDelete(subscriber._id)}
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

export default SubscribersAdmin;
