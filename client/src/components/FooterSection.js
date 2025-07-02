import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL } from '../index';

const FooterSection = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      if (res.ok) {
        toast.success("Subscribed!");
        setNewsletterEmail("");
      } else {
        toast.error("Subscription failed.");
      }
    } catch {
      toast.error("Subscription failed.");
    }
  };

  return (
    <footer className="mt-8">
      {/* Top: Background image with overlay and centered text/button */}
      <div className="relative w-full h-[300px] flex items-center justify-center">
        <img
          src={require("../assets/images/Rectangle.svg").default}
          alt="Footer Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
          <p className="text-white text-2xl md:text-3xl font-bold text-center mb-6 max-w-2xl drop-shadow-lg">
            Learn more about our listing process, as well as our additional
            staging and design work.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded font-semibold hover:bg-blue-100 transition shadow-lg">
            LEARN MORE
          </button>
        </div>
      </div>
      {/* Middle: Blue bar with nav (left) and newsletter (right) */}
      <div className="bg-[#2176FF] py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          <nav className="flex flex-wrap gap-6 text-white font-semibold text-sm justify-center md:justify-start w-full md:w-auto">
            <button type="button" className="hover:underline">
              Home
            </button>
            <button type="button" className="hover:underline">
              Services
            </button>
            <button type="button" className="hover:underline">
              Projects
            </button>
            <button type="button" className="hover:underline">
              Testimonials
            </button>
            <button type="button" className="hover:underline">
              Contact
            </button>
          </nav>
          <div className="flex-1" /> {/* Spacer for left/right alignment */}
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-end"
          >
            <span className="text-white font-semibold whitespace-nowrap">
              Subscribe Us
            </span>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="p-2 rounded text-blue-900 w-48 md:w-56"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <button
              className="bg-white px-4 py-2 rounded text-[#2176FF] font-semibold hover:bg-blue-100 transition border border-white"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
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
      </div>
      {/* Bottom: Copyright (left), Real Trust (center), Social icons (right) */}
      <div className="bg-[#23272F] py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 relative">
          <div className="text-blue-200 text-xs absolute left-0 top-1/2 -translate-y-1/2 md:static md:translate-y-0">
            © Real Trust. All rights reserved 2023
          </div>
          <div className="flex flex-col items-center w-full md:w-auto md:absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
            <div className="flex items-center gap-2">
              <img
                src={require("../assets/images/logo.svg").default}
                alt="Real Trust Logo"
                className="h-6 w-6"
              />
              <span className="text-white font-bold text-lg">
                Real <span className="font-normal">trust</span>
              </span>
            </div>
          </div>
          <div className="flex gap-4 absolute right-0 top-1/2 -translate-y-1/2 md:static md:translate-y-0">
            <a href="#">
              <img
                src={require("../assets/icons/Linkedin.svg").default}
                alt="LinkedIn"
                className="w-6 h-6 bg-white rounded-full p-1 shadow"
              />
            </a>
            <a href="#">
              <img
                src={require("../assets/icons/Group.svg").default}
                alt="Facebook"
                className="w-6 h-6 bg-white rounded-full p-1 shadow"
              />
            </a>
            <a href="#">
              <img
                src={require("../assets/icons/Group-1.svg").default}
                alt="Twitter"
                className="w-6 h-6 bg-white rounded-full p-1 shadow"
              />
            </a>
            <a href="#">
              <img
                src={require("../assets/icons/Frame.svg").default}
                alt="Frame"
                className="w-6 h-6 bg-white rounded-full p-1 shadow"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
