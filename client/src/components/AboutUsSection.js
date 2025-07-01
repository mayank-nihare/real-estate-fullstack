import React from "react";

const AboutUsSection = () => (
  <section className="relative bg-white py-12 px-4 md:px-20 overflow-hidden">
    <div className="max-w-5xl mx-auto text-center">
      {/* Images row with styled placement */}
      <div className="relative flex items-center justify-center mb-12 min-h-[180px] md:min-h-[220px]">
        {/* Left image with orange corner */}
        <div className="relative z-10">
          <img
            src={
              require("../assets/images/pexels-brett-sayles-2881232.svg")
                .default
            }
            alt="About 1"
            className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-lg shadow-lg"
          />
          <span className="absolute -left-3 -bottom-3 w-6 h-6 border-l-4 border-b-4 border-orange-500 rounded-bl-lg" />
        </div>
        {/* Center image with blue square behind */}
        <div className="relative z-20 mx-4 md:mx-8">
          <span className="absolute -left-6 -top-6 w-8 h-8 bg-blue-500 rounded-sm opacity-90 z-0" />
          <img
            src={
              require("../assets/images/pexels-andres-ayrton-6578391.svg")
                .default
            }
            alt="About 2"
            className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-lg shadow-xl relative z-10"
          />
        </div>
        {/* Right image with blue/orange corner */}
        <div className="relative z-10">
          <img
            src={require("../assets/images/pexels-fauxels-3182834.svg").default}
            alt="About 3"
            className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-lg shadow-lg"
          />
          <span className="absolute -right-3 -top-3 w-6 h-6 border-r-4 border-t-4 border-blue-500 rounded-tr-lg" />
          <span className="absolute -right-3 -bottom-3 w-6 h-6 border-r-4 border-b-4 border-orange-500 rounded-br-lg" />
        </div>
      </div>
      {/* About Us Heading and Description */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#2176FF] mb-2">
        About Us
      </h2>
      <div className="w-24 h-2 bg-[#2176FF] mx-auto mb-8 rounded-full" />
      <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
        Fifteen years of experience in real estate, excellent customer service,
        and a commitment to work hard, listen and follow through. We provide
        quality services to build relationships with clients and, more
        importantly, maintain those relationships by communicating effectively.
      </p>
      <button className="mx-auto block border-2 border-[#2176FF] text-[#2176FF] font-bold px-10 py-2 rounded-full transition hover:bg-[#2176FF] hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg">
        LEARN MORE
      </button>
    </div>
    {/* Faint background circles and squares for extra polish can be added here if needed */}
  </section>
);

export default AboutUsSection;
