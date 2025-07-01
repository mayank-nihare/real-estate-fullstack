import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch(() => setProjects([]));
  }, []);

  return (
    <section className="bg-blue-50 py-8 px-2 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2176FF] mb-2 text-center">
          Our Projects
        </h2>
        <div className="w-16 h-1 bg-[#2176FF] mx-auto mb-8 rounded-full" />
        <p className="text-center text-gray-600 mb-10 text-lg">
          We know what buyers are looking for and suggest projects that will
          bring clients top dollar for the sale of their homes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-28 justify-center">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-2xl shadow-lg flex flex-col items-stretch overflow-hidden transition hover:shadow-2xl w-60 min-w-[240px] max-w-[240px] h-[320px] -translate-x-6"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="flex-1 flex flex-col justify-between p-4">
                <h3 className="font-bold text-[#2176FF] text-left text-base mb-1">
                  {project.name}
                </h3>
                <p className="text-gray-500 text-sm text-left truncate mb-4">
                  {project.description}
                </p>
                <button
                  className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold cursor-not-allowed mt-auto"
                  disabled
                >
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
