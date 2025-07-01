import React from "react";

const WhyChooseUs = () => (
  <section className="relative bg-white py-16 px-4 md:px-20 overflow-hidden">
    {/* Faded circle at top left */}
    <img
      src={require("../assets/shapes/Ellipse 19.svg").default}
      alt="Faded Circle"
      className="absolute left-0 top-0 w-56 md:w-80 opacity-20 z-0"
      style={{ pointerEvents: "none" }}
    />
    {/* Dotted pattern bottom left */}
    <img
      src={require("../assets/shapes/Group 1000001645.svg").default}
      alt="Dotted Pattern"
      className="absolute left-8 bottom-24 w-24 opacity-30 z-0 hidden md:block"
      style={{ pointerEvents: "none" }}
    />
    {/* Half circle bottom left */}
    <img
      src={require("../assets/shapes/Ellipse 8.svg").default}
      alt="Half Circle"
      className="absolute left-0 bottom-0 w-40 opacity-10 z-0 hidden md:block"
      style={{ pointerEvents: "none" }}
    />
    <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-20">
      {/* Left: Text */}
      <div className="flex-1 text-left md:pr-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2176FF] mb-4">
          Not Your Average Realtor
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
          Real Trust has an eye for selling a property with world class selling
          design, and effective marketing to get the maximum top dollar on the
          houses.
        </p>
      </div>
      {/* Right: Images and shapes */}
      <div className="flex-1 flex items-center justify-center relative min-h-[340px] md:min-h-[420px]">
        {/* Ellipse 7 as boundary */}
        <img
          src={require("../assets/shapes/Ellipse 7.svg").default}
          alt="Ellipse 7"
          className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ pointerEvents: "none" }}
        />
        {/* Dots on boundary */}
        <img
          src={require("../assets/shapes/Ellipse 24-1.svg").default}
          alt="Blue Dot"
          className="absolute w-5 h-5 left-[62%] top-[8%] z-20"
        />
        <img
          src={require("../assets/shapes/Ellipse 25-1.svg").default}
          alt="Orange Dot"
          className="absolute w-5 h-5 left-[85%] top-[44%] z-20"
        />
        <img
          src={require("../assets/shapes/Ellipse 26.svg").default}
          alt="Blue Dot 2"
          className="absolute w-5 h-5 left-[38%] top-[90%] z-20"
        />
        {/* Main (center) image */}
        <img
          src={require("../assets/images/Ellipse 11.svg").default}
          alt="Ellipse 11"
          className="absolute w-40 h-40 md:w-56 md:h-56 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 rounded-full border-4 border-[#E3EAFD] shadow-xl bg-white object-cover"
        />
        {/* Top right image */}
        <img
          src={require("../assets/images/Ellipse 12.svg").default}
          alt="Ellipse 12"
          className="absolute w-24 h-24 md:w-32 md:h-32 left-[75%] top-[10%] z-30 rounded-full border-4 border-[#E3EAFD] shadow-lg bg-white object-cover"
        />
        {/* Bottom right image */}
        <img
          src={require("../assets/images/Ellipse 13.svg").default}
          alt="Ellipse 13"
          className="absolute w-24 h-24 md:w-32 md:h-32 left-[75%] top-[60%] z-30 rounded-full border-4 border-[#E3EAFD] shadow-lg bg-white object-cover"
        />
      </div>
    </div>
    {/* Why Choose Us Section */}
    <div className="max-w-6xl mx-auto relative z-10 mt-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-[#2176FF] mb-2">
          Why Choose Us?
        </h3>
        <div className="w-16 h-1 bg-[#2176FF] mx-auto mb-6 rounded-full" />
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="flex-1">
            <div className="flex flex-col items-center">
              <img
                src={require("../assets/icons/circle-dollar-sign.svg").default}
                alt="ROI"
                className="w-12 h-12 mb-2"
              />
              <h4 className="font-bold text-blue-800">Potential ROI</h4>
              <p className="text-gray-600 text-sm text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi
                consectetur nisi, euismod euismod nisi nisi euismod.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col items-center">
              <img
                src={require("../assets/icons/paintbrush-2.svg").default}
                alt="Design"
                className="w-12 h-12 mb-2"
              />
              <h4 className="font-bold text-blue-800">Design</h4>
              <p className="text-gray-600 text-sm text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi
                consectetur nisi.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col items-center">
              <img
                src={require("../assets/icons/home.svg").default}
                alt="Marketing"
                className="w-12 h-12 mb-2"
              />
              <h4 className="font-bold text-blue-800">Marketing</h4>
              <p className="text-gray-600 text-sm text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
