import { ExternalLink, Github } from "lucide-react";
import { FaReact, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import projectImg1 from "/public/Projects/projectImg1.png";
import projectImg2 from "/public/Projects/projectImg2.png";
import projectImg3 from "/public/Projects/projectImg3.png";

// Updated data structure for supporting custom icon + custom label
const projects = [
  {
    id: 1,
    title: "Food Pulse Application",
    description:
      "Food Pulse is a smart food management web application that helps users monitor expiry dates, categorize food items, add storage notes, and avoid unnecessary waste — all in one intuitive interface.",
    img: projectImg1,
    link: "https://food-pulse-web.netlify.app/",
    github: "https://github.com/mdshahariarhafizofficial/food-pulse",
    details: "https://github.com/mdshahariarhafizofficial/food-pulse/blob/main/README.md",
    tech: [
      { name: "React Js", key: "react" },
      { name: "React Router", key: "react_router" },
      { name: "JavaScript", key: "js" },
      { name: "Tailwind CSS", key: "tailwind" },
      { name: "DaisyUI", key: "daisy" },
      { name: "Vite", key: "vite" },
      { name: "Node Js", key: "node" },
      { name: "Express Js", key: "express" },
      { name: "Mongo Db", key: "mongodb" },
      { name: "Jwt", key: "jwt" },
      { name: "Firebase", key: "firebase" },
    ],
  },
  {
    id: 2,
    title: "Hobby Hub",
    description:
      "Hobby Hub is a vibrant platform where hobbyists from all walks of life can discover, create, and join interest-based groups in their local community. Whether it's painting, photography, gaming, or reading, there's a hub for everyone!",
    img: projectImg2,
    link: "https://hobby-hub-web.netlify.app/",
    github: "https://github.com/mdshahariarhafizofficial/hobby-hub-client",
    details: "https://github.com/mdshahariarhafizofficial/hobby-hub-client/blob/main/README.md",
    tech: [
      { name: "React Js", key: "react" },
      { name: "React Router", key: "react_router" },
      { name: "JavaScript", key: "js" },
      { name: "Tailwind CSS", key: "tailwind" },
      { name: "DaisyUI", key: "daisy" },
      { name: "Vite", key: "vite" },
      { name: "Node Js", key: "node" },
      { name: "Express Js", key: "express" },
      { name: "Mongo Db", key: "mongodb" },
      { name: "Firebase", key: "firebase" },
    ],
  },
  {
    id: 3,
    title: "AppStack – React App Store",
    description:
      "AppStack is a responsive, user-friendly web application built using React, Firebase, and Tailwind CSS. It includes modern UI design, user authentication, profile management, and protected routes — making it a complete app browsing solution.",
    img: projectImg3,
    link: "https://appstack-apps-store.netlify.app/",
    github: "https://github.com/mdshahariarhafizofficial/app-stack-apps-store",
    details: "https://github.com/mdshahariarhafizofficial/app-stack-apps-store/blob/main/README.md",
    tech: [
      { name: "React Js", key: "react" },
      { name: "React Router", key: "react_router" },
      { name: "JavaScript", key: "js" },
      { name: "Tailwind CSS", key: "tailwind" },
      { name: "DaisyUI", key: "daisy" },
      { name: "Vite", key: "vite" },
      { name: "Firebase", key: "firebase" },
    ],
  },
];

// Scrollable image component
function ScrollableImage({ src, alt }) {
  return (
    <div className="w-full md:w-full lg:w-[50%] h-[370px] overflow-y-scroll pr-3 rounded-2xl shadow-inner scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent">
      <img
        src={typeof src === "string" ? src : src?.src}
        alt={alt}
        className="w-full h-auto min-h-[500px] object-cover rounded-xl mr-[-8px]"
      />
    </div>
  );
}

// TechBadge with support for custom icon + text
function TechBadge({ tech }) {
  const iconMap = {
    react: <FaReact className="text-cyan-400 w-4 h-4 shrink-0" />,
    js: <FaJsSquare className="text-yellow-400 w-4 h-4 shrink-0" />,
    tailwind: <SiTailwindcss className="text-sky-400 w-4 h-4 shrink-0" />,
    mongodb: <SiMongodb className="text-green-500 w-4 h-4 shrink-0" />,
    node: <FaNodeJs className="text-green-600 w-4 h-4 shrink-0" />,
    daisy: (
      <img
        src="https://skills.syvixor.com/api/icons?i=daisyui"
        alt="DaisyUI"
        className="max-w-6 h-5 shrink-0"
      />
    ),
    vite: (
      <img
        src="https://skills.syvixor.com/api/icons?i=vite"
        alt="DaisyUI"
        className="max-w-6 h-5 shrink-0"
      />
    ),
    express: (
      <img
        src="https://skills.syvixor.com/api/icons?i=express"
        alt="DaisyUI"
        className="max-w-6 h-5 shrink-0"
      />
    ),
    jwt: (
      <img
        src="https://skills.syvixor.com/api/icons?i=jwt"
        alt="DaisyUI"
        className="max-w-6 h-5 shrink-0"
      />
    ),
    firebase: (
      <img
        src="https://skills.syvixor.com/api/icons?i=firebase"
        alt="DaisyUI"
        className="max-w-6 h-5 shrink-0"
      />
    ),
    react_router: (
      <img
        src="https://skills.syvixor.com/api/icons?i=reactrouter"
        alt="DaisyUI"
        className="max-w-6 h-5 shrink-0"
      />
    ),

  };

  const icon = iconMap[tech.key?.toLowerCase()] ?? <span className="w-4 h-4" />;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium bg-[#1c1c1c] border border-gray-700 rounded-full mr-2 mb-2">
      <span className="flex items-center justify-center">{icon}</span>
      <span className="whitespace-nowrap">{tech.name}</span>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      id="portfolio"
      className="relative z-10 bg-black text-white md:px-8 py-24 overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Explore my latest work and creative solutions
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group transition-all duration-300 hover:shadow-2xl hover:ring-1 hover:ring-teal-500 flex flex-col md:flex-col lg:flex-row lg:even:flex-row-reverse items-center gap-6 bg-[#101010] rounded-2xl px-5 md:px-12 py-8"
            >
              <ScrollableImage src={project.img} alt={project.title} />

              <div className="flex-1 w-full">
                <h3 className="text-4xl font-black text-primary mb-2">
                  {String(project.id).padStart(2, "0")}
                </h3>
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-400 mb-3">{project.description}</p>

                <div className="flex flex-wrap mb-4">
                  {project.tech.map((t, index) => (
                    <TechBadge key={index} tech={t} />
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.github}
                    className="inline-flex items-center gap-1 px-4 py-1.5 bg-[#1c1c1c] border border-gray-600 rounded-lg text-sm hover:bg-gray-800"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.details}
                    className="inline-flex items-center gap-1 px-4 py-1.5 bg-[#1c1c1c] border border-gray-600 rounded-lg text-sm hover:bg-gray-800"
                  >
                    <ExternalLink size={16} /> Details
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    className="inline-flex items-center gap-1 px-4 py-1.5 bg-primary text-black rounded-lg text-sm hover:opacity-90"
                  >
                    <ExternalLink size={16} /> Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
