import React, { useState } from "react";
import axios from "axios";
import heroBg from "../assets/images/hero-bg.jpg";
import { API_BASE_URL } from '../index';

const HeroSection = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    try {
      await axios.post(`${API_BASE_URL}/api/contacts`, form);
      setSuccess("Thank you! We will contact you soon.");
      setForm({ fullName: "", email: "", mobile: "", city: "" });
    } catch (err) {
      setError("Submission failed. Please try again.");
    }
  };

  return (
    <section className="relative w-full h-[80vh] min-h-[400px] flex items-center justify-center overflow-hidden p-0 m-0">
      <img
        src={heroBg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ objectPosition: "60% 40%" }}
      />
      <div className="absolute inset-0 bg-black/20 z-10" />
      <div className="relative z-20 w-full h-full flex items-center justify-between px-4 md:px-16">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 md:static md:translate-y-0 flex-1 flex flex-col justify-center h-full md:pr-8 pl-4 md:pl-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
            Consultation,
            <br />
            Design, & Marketing
          </h1>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 md:static md:translate-y-0 flex-1 flex justify-center items-center h-full pr-4 md:pr-0 mt-8 md:mt-0">
          <form
            onSubmit={handleSubmit}
            className="bg-[#55608A] border border-white shadow-lg p-8 rounded-lg w-full max-w-sm flex flex-col gap-5"
          >
            <h2 className="text-white text-2xl font-bold text-center mb-4">
              Get a Free Consultation
            </h2>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="p-3 rounded border border-gray-300 bg-white focus:outline-none text-gray-800"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter Email Address"
              className="p-3 rounded border border-gray-300 bg-white focus:outline-none text-gray-800"
              type="email"
            />
            <input
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              required
              placeholder="Mobile Number"
              className="p-3 rounded border border-gray-300 bg-white focus:outline-none text-gray-800"
            />
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              placeholder="Area, City"
              className="p-3 rounded border border-gray-300 bg-white focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="bg-[#F58220] hover:bg-orange-600 text-white font-bold py-3 rounded transition w-full mt-2"
            >
              Get Quick Quote
            </button>
            {success && (
              <p className="text-green-300 text-sm mt-2 text-center">
                {success}
              </p>
            )}
            {error && (
              <p className="text-red-300 text-sm mt-2 text-center">{error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
