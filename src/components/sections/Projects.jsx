import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent items-center justify-center flex">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Projects */}
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Full-Stack E-Commerce Website using ReactJS & Stripe
              </h3>
              <p className="text-gray-300 mb-4">
                Developed a dynamic and scalable e-commerce platform using
                ReactJS, with seamless payment integration powered by Stripe.
                Implemented secure transaction processing, product listings,
                cart management, user authentication, and responsive UI for an
                enhanced shopping experience.
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {[
                  "HTML",
                  "CSS",
                  "ReactJS",
                  "Stripe",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "JWT",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                <div className="flex justify-center items-center mt-3 bg-blue-500 hover:bg-blue-500/10 hover:border-blue-500 hover:border text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  <a
                    href="https://e-commerce-5h1r.onrender.com"
                    className="text-white   transition-colors"
                  >
                    View Project Live Demo
                  </a>
                </div>
                <div className="flex justify-center items-center mt-3 bg-blue-500 hover:bg-blue-500/10 hover:border-blue-500 hover:border text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  <a
                    href="https://github.com/DeenuRamenjes/Full_Stack_E-Commerce_Website_using_React_JS.git"
                    className="text-white   transition-colors"
                  >
                    View Project in Github
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-2xl font-bold mb-4">
                Spotify Clone – Real-Time Chat & Live Listening
              </h3>
              <p className="text-gray-300 mb-4">
                Built a feature-rich Spotify-inspired music streaming platform
                using ReactJS, integrating real-time chat and live listening
                capabilities. Users can chat with friends while listening, view
                what others are playing, and experience synchronized audio
                playback.
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {[
                  "ReactJS",
                  "TailwindCSS",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Typescript",
                  "Socket.io",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                <div className="flex justify-center items-center mt-3 bg-blue-500 hover:bg-blue-500/10 hover:border-blue-500 hover:border text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  <a
                    href="https://spotify-chat-jqzp.onrender.com"
                    className="text-white   transition-colors"
                  >
                    View Project Live Demo
                  </a>
                </div>
                <div className="flex justify-center items-center mt-3 bg-blue-500 hover:bg-blue-500/10 hover:border-blue-500 hover:border text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  <a
                    href="https://github.com/DeenuRamenjes/Full_Stack_Spotify-clone_with_chat_using_React_TypeScript_and_Tailwind_css.git"
                    className="text-white  transition-colors"
                  >
                    View Project in Github
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-2xl font-bold mb-4">
                FlashBack – A Social Media App using React Native
              </h3>
              <p className="text-gray-300 mb-4">
                Designed and developed "FlashBack," an Instagram-inspired social
                media platform, built with React Native for a smooth and
                interactive mobile experience. Features include real-time post
                sharing, user authentication, profile customization, push
                notifications, and a fully responsive UI optimized for mobile
                engagement.
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {[
                  "React Native",
                  "TailwindCSS",
                  "Node.js",
                  "Typescript",
                  "Express",
                  "Convex",
                  "Expo",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center items-center mt-3 bg-blue-500 hover:bg-blue-500/10 hover:border-blue-500 hover:border text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                <a
                  href="https://github.com/DeenuRamenjes/FlashBack-Social_Media_Mobile_App_using_React-Native.git"
                  className="text-white  transition-colors"
                >
                  View Project in Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
