import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Função para alternar automaticamente entre os projetos
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 5000); // Troca de slide a cada 5 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [currentProjectIndex]);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % PROJECTS.length);
  };

  const previousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? PROJECTS.length - 1 : prevIndex - 1
    );
  };

  const currentProject = PROJECTS[currentProjectIndex];

  return (
    <div className="relative bg-black text-white w-full overflow-hidden">
      {/* Banner Dinâmico */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentProjectIndex}
            className="absolute w-full h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Gradiente e Conteúdo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-16 left-16">
              <h2 className="text-4xl font-bold mb-2">{currentProject.title}</h2>
              <p className="text-lg max-w-2xl mb-4">{currentProject.description}</p>
              <div className="flex items-center gap-4">
                {currentProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 rounded text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={currentProject.link} // Cada projeto usará seu próprio link
                target="_blank" // Abre o link em uma nova aba
                rel="noopener noreferrer" // Segurança adicional
                className="mt-6 inline-block px-6 py-3 bg-white text-black text-lg font-semibold rounded-lg shadow-md hover:bg-gray-300 transition"
              >
                Visualizar
              </a>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Setas de Navegação */}
        <div
          onClick={previousProject}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10"
        >
          <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white opacity-70 hover:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.div>
        </div>
        <div
          onClick={nextProject}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10"
        >
          <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white opacity-70 hover:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
