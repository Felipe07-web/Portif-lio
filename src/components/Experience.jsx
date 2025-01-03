import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  // Variantes para animação das experiências
  const experienceVariants = {
    hidden: { opacity: 0, x: 50 }, // Começa invisível e à direita
    visible: { opacity: 1, x: 0 }, // Fica visível e na posição original
    transition: { duration: 1, ease: "easeOut" } // Duração e suavização
  };

  // Variantes para animação das datas
  const dateVariants = {
    hidden: { opacity: 0, x: -20 }, // Começa invisível e à esquerda
    visible: { opacity: 1, x: 0 }, // Fica visível e na posição original
    transition: { duration: 1, ease: "easeOut" } // Duração e suavização
  };

  return (
    <div className="border-b border-neutral-900 pb-4">  
      <motion.h2 
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        experiências
      </motion.h2> 
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div 
            key={index} 
            className="mb-8 flex flex-wrap lg:justify-center"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Move da esquerda ou direita
            whileInView={{ opacity: 1, x: 0 }} // Fica visível e na posição original
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }} // Anima apenas uma vez quando visível
          >
            <motion.div
              className="w-full lg:w-1/4"
              initial="hidden"
              whileInView="visible"
              variants={dateVariants}
              viewport={{ once: true }} // Anima apenas uma vez quando visível
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="mt-4">
                {experience.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>  
    </div>
  );
};

export default Experience;
