import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

// Import semua gambar
import compro1 from "../assets/images/Projects/compro/Screenshot 2025-05-22 112928.png";
import compro2 from "../assets/images/Projects/compro/Screenshot (13).png";
import compro3 from "../assets/images/Projects/compro/Screenshot (14).png";
import compro4 from "../assets/images/Projects/compro/Screenshot (15).png";
import compro5 from "../assets/images/Projects/compro/Screenshot (16).png";
import compro6 from "../assets/images/Projects/compro/Screenshot (17).png";
import compro7 from "../assets/images/Projects/compro/Screenshot (18).png";
import compro8 from "../assets/images/Projects/compro/Screenshot (19).png";
import compro9 from "../assets/images/Projects/compro/Screenshot (20).png";
import compro10 from "../assets/images/Projects/compro/Screenshot (21).png";
import compro11 from "../assets/images/Projects/compro/Screenshot (22).png";

import bus1 from "../assets/images/Projects/tiketbus/Screenshot (23).png";
import bus2 from "../assets/images/Projects/tiketbus/Screenshot (24).png";
import bus3 from "../assets/images/Projects/tiketbus/Screenshot (25).png";
import bus4 from "../assets/images/Projects/tiketbus/Screenshot (26).png";
import bus5 from "../assets/images/Projects/tiketbus/Screenshot (27).png";
import bus6 from "../assets/images/Projects/tiketbus/Screenshot (28).png";
import bus7 from "../assets/images/Projects/tiketbus/Screenshot (29).png";
import bus8 from "../assets/images/Projects/tiketbus/Screenshot (30).png";
import bus9 from "../assets/images/Projects/tiketbus/Screenshot (31).png";
import bus10 from "../assets/images/Projects/tiketbus/Screenshot (32).png";
import bus11 from "../assets/images/Projects/tiketbus/Screenshot (33).png";
import bus12 from "../assets/images/Projects/tiketbus/Screenshot (34).png";
import bus13 from "../assets/images/Projects/tiketbus/Screenshot (35).png";

import game from "../assets/images/Projects/Game.png";

import ecommerce1 from "../assets/images/Projects/ecommerce/Screenshot (36).png";
import ecommerce2 from "../assets/images/Projects/ecommerce/Screenshot (37).png";
import ecommerce3 from "../assets/images/Projects/ecommerce/Screenshot (38).png";
import ecommerce4 from "../assets/images/Projects/ecommerce/Screenshot (39).png";
import ecommerce5 from "../assets/images/Projects/ecommerce/Screenshot (40).png";
import ecommerce6 from "../assets/images/Projects/ecommerce/Screenshot (41).png";

import guitar1 from "../assets/images/Projects/guitar/Screenshot (54).png";
import guitar2 from "../assets/images/Projects/guitar/Screenshot (55).png";
import guitar3 from "../assets/images/Projects/guitar/Screenshot (56).png";
import guitar4 from "../assets/images/Projects/guitar/Screenshot (57).png";
import guitar5 from "../assets/images/Projects/guitar/Screenshot (58).png";
import guitar6 from "../assets/images/Projects/guitar/Screenshot (59).png";
import guitar7 from "../assets/images/Projects/guitar/Screenshot (60).png";
import guitar8 from "../assets/images/Projects/guitar/Screenshot (61).png";
import guitar9 from "../assets/images/Projects/guitar/Screenshot (62).png";
import guitar10 from "../assets/images/Projects/guitar/Screenshot (63).png";
import guitar11 from "../assets/images/Projects/guitar/Screenshot (64).png";
import guitar12 from "../assets/images/Projects/guitar/Screenshot (65).png";
import guitar13 from "../assets/images/Projects/guitar/Screenshot (66).png";
import guitar14 from "../assets/images/Projects/guitar/Screenshot (67).png";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  carouselImages: string[];
}

export default function Projects() {
  const { t } = useTranslation();

  const [active, setActive] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(t("projects.categories.all"));
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    t("projects.categories.all"),
    t("projects.categories.website"),
    t("projects.categories.figma"),
    t("projects.categories.game"),
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: t("projects.list.0.title"),
      category: t("projects.categories.website"),
      image: compro1,
      description: t("projects.list.0.description"),
      tech: ["React.js", "Tailwind CSS", "Vite"],
      carouselImages: [compro1, compro2, compro3, compro4, compro5, compro6, compro7, compro8, compro9, compro10, compro11],
    },
    {
      id: 2,
      title: t("projects.list.1.title"),
      category: t("projects.categories.figma"),
      image: bus1,
      description: t("projects.list.1.description"),
      tech: ["Figma", "UI/UX"],
      carouselImages: [bus1, bus2, bus3, bus4, bus5, bus6, bus7, bus8, bus9, bus10, bus11, bus12, bus13],
    },
    {
      id: 3,
      title: t("projects.list.2.title"),
      category: t("projects.categories.game"),
      image: game,
      description: t("projects.list.2.description"),
      tech: ["Construct 2"],
      carouselImages: [game],
    },
    {
      id: 4,
      title: t("projects.list.3.title"),
      category: t("projects.categories.website"),
      image: ecommerce1,
      description: t("projects.list.3.description"),
      tech: ["React.js", "Tailwind CSS", "Vite"],
      carouselImages: [ecommerce1, ecommerce2, ecommerce3, ecommerce4, ecommerce5, ecommerce6],
    },
    {
      id: 5,
      title: t("projects.list.4.title"),
      category: t("projects.categories.figma"),
      image: guitar1,
      description: t("projects.list.4.description"),
      tech: ["Figma", "UI/UX"],
      carouselImages: [guitar1, guitar2, guitar3, guitar4, guitar5, guitar6, guitar7, guitar8, guitar9, guitar10, guitar11, guitar12, guitar13, guitar14],
    },
  ];

  const filteredProjects =
    selectedCategory === t("projects.categories.all")
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleNext = () => {
    if (!activeProject) return;
    setCarouselIndex((prev) =>
      prev === activeProject.carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (!activeProject) return;
    setCarouselIndex((prev) =>
      prev === 0 ? activeProject.carouselImages.length - 1 : prev - 1
    );
  };

  const TechBadge = ({ tech }: { tech: string }) => (
    <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
      {tech}
    </span>
  );

  const openModal = (project: Project) => {
    setActiveProject(project);
    setCarouselIndex(0);
    setActive(true);
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-8 md:px-16 lg:px-32 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("projects.title")}
      </motion.h2>

      {/* Kategori Filter */}
      <div className="flex flex-wrap justify-center mb-8 gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              selectedCategory === category
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700 border-gray-300"
            } transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Daftar Project */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition"
            onClick={() => openModal(project)}
            whileHover={{ scale: 1.03 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4 text-left">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{project.description}</p>
              <div className="flex flex-wrap">
                {project.tech.map((tech, index) => (
                  <TechBadge key={index} tech={tech} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Carousel */}
      <AnimatePresence>
        {active && activeProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(false)}
          >
            <div className="bg-white p-4 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 relative" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-gray-500" onClick={() => setActive(false)}>✕</button>
              <img src={activeProject.carouselImages[carouselIndex]} className="w-full h-auto rounded mb-4" alt="Project" />
              <div className="flex justify-between">
                <button onClick={handlePrev}>&larr;</button>
                <span>{carouselIndex + 1} / {activeProject.carouselImages.length}</span>
                <button onClick={handleNext}>&rarr;</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}