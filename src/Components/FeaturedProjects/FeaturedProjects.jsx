import { useRef, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { FaReact, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Crypto Screener Application",
    description:
      "A platform to track real-time crypto prices and trends with smooth UI/UX.",
    img: "/projects/crypto.png",
    link: "#",
    github: "#",
    details: "#",
    tech: ["react", "js", "tailwind"],
  },
  {
    id: 2,
    title: "Euphoria – Ecommerce (Apparels) Website Template",
    description:
      "Modern ecommerce template for clothing brands with responsive and elegant design.",
    img: "/projects/ecommerce.png",
    link: "#",
    github: "#",
    details: "#",
    tech: ["react", "tailwind", "mongodb"],
  },
  {
    id: 3,
    title: "Blog Website Template",
    description:
      "Sleek blog UI with category filtering, dark mode, and minimal aesthetics.",
    img: "/projects/blog.png",
    link: "#",
    github: "#",
    details: "#",
    tech: ["js", "tailwind", "node"],
  },
];

function ScrollableImage({ src, alt }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let scrollAmount = 0;
    const maxScroll = el.scrollHeight - el.clientHeight;

    const interval = setInterval(() => {
      if (scrollAmount < maxScroll) {
        scrollAmount += 1;
        el.scrollTop = scrollAmount;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      className="w-full md:w-full lg:w-[40%] h-[300px] overflow-y-scroll rounded-2xl border border-gray-700 shadow-inner no-scrollbar"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
}

function TechBadge({ name }) {
  const iconMap = {
    react: <FaReact className="text-cyan-400" />,
    js: <FaJsSquare className="text-yellow-400" />,
    tailwind: <SiTailwindcss className="text-sky-400" />,
    mongodb: <SiMongodb className="text-green-500" />,
    node: <FaNodeJs className="text-green-600" />,
  };

  return (
    <span className="inline-flex items-center gap-1 text-sm px-2 py-0.5 bg-[#1c1c1c] border border-gray-700 rounded-full mr-2 mb-2">
      {iconMap[name]} <span className="capitalize">{name}</span>
    </span>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      id="portfolio"
      className="relative z-10 bg-black text-white md:px-8 py-24 overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Explore my latest work and creative solutions
          </p>
        </div>

        <div className="space-y-12">
          {projects.map( project => (
            <div
              key={project.id}
              className="group transition-all duration-300 hover:shadow-2xl hover:ring-1 hover:ring-teal-500 flex flex-col md:flex-col lg:flex-row lg:even:flex-row-reverse items-center gap-6 bg-[#101010] rounded-2xl px-5 md:px-12 py-8"
            >
              <ScrollableImage src={project.img} alt={project.title} />

              <div className="flex-1 w-full">
                <h3 className="text-2xl font-black text-white mb-2">
                  {String(project.id).padStart(2, "0")}
                </h3>
                <h4 className="text-xl font-semibold mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tech.map((t) => (
                    <TechBadge key={t} name={t} />
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1 px-4 py-1.5 bg-[#1c1c1c] border border-gray-600 rounded-lg text-sm hover:bg-gray-800"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={project.details}
                    className="inline-flex items-center gap-1 px-4 py-1.5 bg-[#1c1c1c] border border-gray-600 rounded-lg text-sm hover:bg-gray-800"
                  >
                    <ExternalLink size={16} /> Details
                  </a>
                  <a
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
