import { FaArrowRight, FaDownload, FaLinkedinIn, FaDribbble, FaBehance, FaGithub, FaCode, FaPaintBrush, FaMobileAlt, FaAngleDown } from 'react-icons/fa';
import person from '../../assets/person-img.png';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';


export default function Hero() {
  return (
    <section id='home' className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-0 bg-black text-white overflow-hidden relative">
      <div className="max-w-[1320px] w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full space-y-6 text-center md:text-left -mt-6"
        >
          {/* Available Badge */}
          <span className="inline-block px-4 py-1 text-sm rounded-full bg-[#0f2221] text-teal-400 font-medium">
            ● Available for Freelance
          </span>

          {/* Headline with Typewriter */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Crafting Digital <br />
            <TypeAnimation
              sequence={['Experiences', 2000, 'Solutions', 2000, 'Interfaces', 2000]}
              wrapper="span"
              speed={50}
              cursor={true}
              className="text-[#2dd4bf] underline underline-offset-8 decoration-[3px] decoration-white inline-block font-bold !leading-tight"
              repeat={Infinity}
            />
          </h1>

          {/* Sub Text */}
          <p className="text-gray-300 text-lg leading-relaxed">
            Hi, I'm <span className="text-teal-400 font-medium">Md. Shahariar Hafiz</span>, a dedicated and enthusiastic frontend developer. Although I am a <span className="text-teal-400 font-medium">fresher</span>, I’ve built <span className="text-teal-400 font-medium">15+ projects</span> using technologies like HTML, CSS, JavaScript, React, and some full-stack projects using the MERN stack. I am passionate about creating clean, responsive, and user-friendly web applications.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 justify-center md:justify-start mt-4">
            <div>
              <p className="text-3xl font-bold">15+</p>
              <p className="text-gray-400 text-sm border-t border-gray-600 pt-1 mt-1">
                Completed Projects
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-gray-400 text-sm border-t border-gray-600 pt-1 mt-1">
                Self-Learning Commitment
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold">∞</p>
              <p className="text-gray-400 text-sm border-t border-gray-600 pt-1 mt-1">
                Learning Everyday
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
            <a href="#contact">
              <button type="button" className="text-white bg-gradient-to-r from-primary via-teal-600 to-teal-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-lg px-8 py-3 text-center me-2 flex items-center gap-2"> 
              Hire me <FaArrowRight /></button>            
            </a>

            <a href="/public/Cv/Md_Shahariar_Hafiz_CV.pdf" download
            >
              <button className="flex items-center gap-2 px-6 py-3 border border-teal-500 text-teal-400 rounded-md font-medium hover:bg-[#0f2221] hover:shadow-md hover:scale-105 transition-all">
                Download CV <FaDownload />
              </button>
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <div className="w-10 h-10 bg-[#0f2221] rounded-full flex items-center justify-center hover:text-teal-400 cursor-pointer transition">
              <FaLinkedinIn className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-[#0f2221] rounded-full flex items-center justify-center hover:text-teal-400 cursor-pointer transition">
              <FaDribbble className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-[#0f2221] rounded-full flex items-center justify-center hover:text-teal-400 cursor-pointer transition">
              <FaBehance className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-[#0f2221] rounded-full flex items-center justify-center hover:text-teal-400 cursor-pointer transition">
              <FaGithub className="w-5 h-5" />
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 w-full mb-12 md:mb-0 flex flex-col items-center md:items-end md:-mt-12 md:pr-8 relative"
        >
          <div className="relative flex flex-col items-center">
            {/* Background effect behind image */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="absolute w-[260px] h-[260px] bg-[#063431]/50 blur-2xl rounded-full -top-8 -z-10"
            ></motion.div>
            <img
              src={person}
              alt="Hero Character"
              className="w-[260px] sm:w-[300px] md:w-[400px] xl:w-[500px] object-contain relative z-10 animate-float"
            />
            {/* Info card below image */}
            <div className="-mt-2 z-50 w-[300px] bg-[#0f2221]/80 backdrop-blur-xl border border-teal-900 text-gray-300 px-4 py-3 rounded-xl shadow-md">
              <p className="text-sm font-medium text-center">Creative Developer</p>
              <div className="flex gap-6 justify-center text-xs mt-2 text-teal-400 items-center">
                <span className="flex items-center gap-1"><FaCode /> Frontend</span>
                <span className="flex items-center gap-1"><FaPaintBrush /> UI/UX</span>
                <span className="flex items-center gap-1"><FaMobileAlt /> Responsive</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2">
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="cursor-pointer"
        >
          <motion.div
          animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[22px] h-[36px] rounded-full border-2 border-gray-600 flex items-start justify-center p-[3px]">
            <div className="w-[4px] h-[4px] rounded-full bg-gray-400 animate-bounce"></div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}