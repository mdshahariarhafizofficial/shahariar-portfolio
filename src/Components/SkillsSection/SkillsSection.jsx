import { Check, Globe, LayoutGrid, Code } from "lucide-react";
import { FaNodeJs, FaReact, FaServer, FaTools } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { MdWeb } from "react-icons/md";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-black text-white px-6 py-20 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & Abilities
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          My expertise and capabilities
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Hexagon Center */}
          <div className="flex justify-center items-center">
            <div className="relative w-[220px] h-[220px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-600 to-teal-900 rounded-[30%] transform rotate-45 scale-110 opacity-20 blur-md"></div>
              <div className="relative z-10 w-full h-full border-4 border-teal-600 rounded-[10%] flex flex-col justify-center items-center">
                <p className="text-3xl font-bold text-primary">Expertise</p>
                <span className="text-gray-400">Frontend to Backend</span>
              </div>

              {/* Animated Icons */}
              <motion.div
                className="absolute -left-28 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-[#101010] text-white font-semibold text-sm rounded shadow"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-1">
                  <FaNodeJs size={20} color="green" />
                  Node Js
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-32 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-[#101010] text-white font-semibold text-sm rounded shadow"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}
              >
                <div className="flex items-center gap-1">
                  <SiExpress size={20} />
                  Express Js
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[#101010] text-white font-semibold text-sm rounded shadow"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.6 }}
              >
                <div className="flex items-center gap-1">
                  <FaReact size={20} color="#00abcc" />
                  React Js
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[#101010] text-white font-semibold text-sm rounded shadow"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.9 }}
              >
                <div className="flex items-center gap-1">
                  <SiMongodb size={20} color="green" />
                  Mongo DB
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right side remains unchanged */}
          <div className="space-y-6">

            {/* Frontend */}
            <div className="bg-[#101010] text-white rounded-xl p-6 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <MdWeb size={40} className="text-teal-400" />
                <h3 className="text-white font-bold text-lg">Frontend</h3>
              </div>
                <div className="divider divider-primary"></div>
                    <img
                    src="https://skills.syvixor.com/api/icons?i=react,js,vite,reactrouter,tailwind,bootstrap,css3,html"
                    alt="Skills"
                    className="w-full max-w-lg mx-auto"
                    />
            </div>

            {/* Backend */}
            <div className="bg-[#101010] text-white rounded-xl p-6 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <FaServer size={35} className="text-teal-400" />
                <h3 className="text-white font-bold text-lg">Backend</h3>
              </div>
                <div className="divider divider-primary"></div>
                    <img
                    src="https://skills.syvixor.com/api/icons?i=nodejs,expressjs,mongodb,js,firebase,jwt,rest"
                    alt="Skills"
                    className="w-full max-w-sm mx-auto"
                    />
            </div>

            {/* Tools */}
            <div className="bg-[#101010] text-white rounded-xl p-6 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <FaTools size={35} className="text-teal-400" />
                <h3 className="text-white font-bold text-lg">Tools & Technologies</h3>
              </div>
                <div className="divider divider-primary"></div>
                    <img
                    src="https://skills.syvixor.com/api/icons?i=git,github,vscode,npm,postman,firebase,netlify,vercel,chatgpt,mongodb"
                    alt="Skills"
                    className="w-full max-w-lg mx-auto"
                    />
            </div>
          </div>
        </div>
      </div>

      {/* background lighting effect */}
      <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-teal-700 rounded-full blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[150px] opacity-10"></div>
    </section>
  );
}
