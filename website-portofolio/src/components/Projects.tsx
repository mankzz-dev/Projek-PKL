import { useState } from "react";
import project1 from "../assets/images/Projects/Project1.png";
import project2 from "../assets/images/Projects/Project2.png";
import project3 from "../assets/images/Projects/Project3.png";
import project4 from "../assets/images/Projects/Project4.png";
import project5 from "../assets/images/Projects/Project5.png";
import project6 from "../assets/images/Projects/Project6.png";
import project7 from "../assets/images/Projects/Project7.png";
import project8 from "../assets/images/Projects/Project8.png";
import project9 from "../assets/images/Projects/Project9.png";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Website Company Profile",
    category: "Website",
    image: project1,
    description: "My Company Profile Website",
  },
  {
    id: 2,
    title: "Education Game",
    category: "Game",
    image: project2,
    description: "My Game Project",
  },
  {
    id: 3,
    title: "Login Form",
    category: "Website",
    image: project3,
    description: "Form Login",
  },
  {
    id: 4,
    title: "Service Provider Website",
    category: "Website",
    image: project4,
    description: "My Service Provider Website Project",
  },
  {
    id: 5,
    title: "Desktop App",
    category: "Desktop",
    image: project5,
    description: "My Desktop App Project",
  },
  {
    id: 6,
    title: "Desktop App",
    category: "Desktop",
    image: project6,
    description: "My Desktop App Project",
  },
  {
    id: 7,
    title: "Figma Design",
    category: "Figma",
    image: project7,
    description: "Design of Marketplace Website",
  },
  {
    id: 8,
    title: "Figma Design",
    category: "Figma",
    image: project8,
    description: "Guitar Marketplace Design",
  },
  {
    id: 9,
    title: "Figma Design",
    category: "Figma",
    image: project9,
    description: "Design of Transport Desktop App",
  },
];

const categories = ["All", "Website", "Desktop", "Figma", "Game", ];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-8 md:px-16 lg:px-32 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">Portofolio</h2>
      <p className="text-xl mb-8 text-gray-600">See my work</p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`border px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-orange-500 text-white"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="cursor-pointer group relative overflow-hidden rounded shadow-lg"
            onClick={() => setActiveImage(project.image)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 p-4 text-left">
              <h3 className="text-lg font-bold text-orange-400">{project.title}</h3>
              <p className="text-sm text-white">— {project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain p-4"
          />
        </div>
      )}
    </div>
  );
}