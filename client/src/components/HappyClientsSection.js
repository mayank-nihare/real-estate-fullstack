import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from '../index';

const getImageUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('http://localhost:5000')) return url.replace('http://localhost:5000', API_BASE_URL);
  if (url.startsWith('localhost:5000')) return url.replace('localhost:5000', API_BASE_URL);
  if (url.startsWith('http')) return url;
  return `${API_BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
};

const HappyClientsSection = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/clients`)
      .then((res) => setClients(res.data))
      .catch(() => setClients([]));
  }, []);

  return (
    <section className="bg-white py-24 px-1 md:px-2">
      <div className="max-w-7xl mx-auto">
        <div className="-translate-y-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2176FF] mb-2 text-center">
            Happy Clients
          </h2>
          <div className="w-16 h-1 bg-[#2176FF] mx-auto mb-10 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20 justify-center">
          {clients.map((client) => (
            <div
              key={client._id}
              className="relative bg-white rounded-2xl shadow-lg flex flex-col items-center pt-12 pb-8 px-4 w-60 min-h-[220px] mx-auto"
            >
              {/* Client image, overlapping top */}
              <img
                src={getImageUrl(client.image)}
                alt={client.name}
                className="w-16 h-16 object-cover rounded-full border-4 border-white shadow absolute left-1/2 -top-8 -translate-x-1/2"
              />
              {/* Card content */}
              <div className="flex-1 flex flex-col justify-between w-full mt-8">
                <p className="text-gray-600 text-base text-center mb-4 leading-relaxed">
                  {client.description}
                </p>
                <h4 className="font-bold text-[#2176FF] text-left text-base mb-1 hover:underline cursor-pointer">
                  {client.name}
                </h4>
                <span className="text-xs text-gray-500 text-left">
                  {client.designation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyClientsSection;
