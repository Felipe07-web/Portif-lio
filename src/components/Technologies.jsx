import { motion } from "framer-motion";
import { SiLaravel } from "react-icons/si"; // Ícone do Laravel
import { DiDocker } from "react-icons/di"; // Ícone do Docker
import { SiMysql } from "react-icons/si"; // Ícone do MySQL
import { RiReactjsLine } from "react-icons/ri"; // Ícone do React
import { FaVuejs } from "react-icons/fa"; // Ícone do Vue.js
import { FaPython } from "react-icons/fa"; // Ícone do Python
import { FaHtml5 } from "react-icons/fa"; // Ícone do HTML
import { FaCss3Alt } from "react-icons/fa"; // Ícone do CSS
import { FaBootstrap } from "react-icons/fa"; // Ícone do Bootstrap
import { SiTailwindcss } from "react-icons/si"; // Ícone do Tailwind CSS
import { SiJavascript } from "react-icons/si"; // Ícone do JavaScript
import { SiPhp } from "react-icons/si"; // Ícone do PHP

const Technologies = () => {
  // Variantes para o movimento suave dos ícones
  const iconVariants = (delay) => ({
    animate: {
      y: [0, -5, 0], // Movimento mais suave
      transition: {
        y: {
          repeat: Infinity,
          duration: 3, // Duração mais longa para um movimento mais suave
          ease: "easeInOut",
          delay: delay // Adiciona um atraso para a animação
        }
      }
    }
  });

  // Variantes para o movimento do título
  const titleVariants = {
    hidden: { opacity: 0, y: -50 }, // Começa invisível e acima
    visible: { opacity: 1, y: 0 }, // Fica visível e na posição original
    transition: { duration: 1, ease: "easeOut" } // Duração e suavização
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        className="my-20 text-center text-4xl"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        Tecnologias
      </motion.h2>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(0)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(0.2)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(0.4)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(0.6)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(0.8)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.0)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPhp className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.2)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.4)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaVuejs className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.6)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.8)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiDocker className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.0)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.2)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiLaravel className="text-7xl text-red-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
