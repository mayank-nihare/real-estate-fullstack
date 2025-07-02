import React from "react";

const Header = () => (
  <header className="w-full bg-white shadow-sm py-3 px-4 md:px-16 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <a href="/">
        <img
          src={require("../assets/images/logo.svg").default}
          alt="Real Trust Logo"
          className="h-16 w-16 cursor-pointer"
        />
      </a>
    </div>
    <nav className="hidden md:flex gap-8 text-sm font-semibold text-blue-900">
      <button type="button" className="hover:text-orange-500">
        HOME
      </button>
      <button type="button" className="hover:text-orange-500">
        SERVICES
      </button>
      <button type="button" className="hover:text-orange-500">
        ABOUT PROJECTS
      </button>
      <button type="button" className="hover:text-orange-500">
        TESTIMONIALS
      </button>
    </nav>
    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded shadow transition">
      CONTACT
    </button>
  </header>
);

export default Header;
