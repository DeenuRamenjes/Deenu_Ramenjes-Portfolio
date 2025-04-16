import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold md-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent loading-right">
          Hi, I'm Deenu Ramenjes
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I'm a full-stack developer passionate about creating user-centric
          applications with a focus on innovative design and seamless
          functionality. Proficient in ReactJS and back-end technologies, I
          excel in building scalable, dynamic solutions.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 px-6 py-3 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
           Contact Me
          </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
