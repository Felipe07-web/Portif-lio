import project1 from "../assets/projects/testeportifólio.jpg";
import project2 from "../assets/projects/jogobanner.jpg";

export const HERO_CONTENT = `Me chamo Felipe Siqueira Santos da Silva, um
 entusiasta de tecnologia e inovação. 
 Desde cedo, desenvolvi uma forte paixão pela
 programação e pela resolução de desafios
 complexos. Iniciei minha jornada na área de
 desenvolvimento back end na minha primeira
 experiência profissional, onde tive a oportunidade de
 trabalhar com PHP utilizando o framework Laravel.
 Tenho um histórico de enfrentar desafios com
 entusiasmo e determinação, sempre buscando
 aprender e aplicar novos conhecimentos para
 alcançar soluções eficazes.`;

export const ABOUT_TEXT = 'Tenho atuado no mercado de tecnologia desde os 16 anos, acumulando experiência significativa em diversas áreas. Inicialmente, trabalhei com back-end, onde desenvolvi e gerenciei cadastros utilizando Laravel e construí APIs. Esse período foi fundamental para o meu desenvolvimento profissional.Atualmente, atuo como desenvolvedor full stack, tendo trabalhado em projetos utilizando JavaScript com o framework React. Sou apaixonado por aprender novas tecnologias e, ao longo da minha carreira, tive a oportunidade de trabalhar com uma variedade de ferramentas e linguagens, incluindo Python, Vue.js, PHP, MySQL e Docker.Estou sempre em busca de novos desafios e oportunidades para expandir meus conhecimentos e habilidades na área de desenvolvimento.'
export const EXPERIENCES = [
  {
    year: "2024 - Atualmente",
    role: "Junior Full Stack Developer",
    company: "Atacado Vila Nova",
    description: `Atualmente, estou atuando como estagiário em desenvolvimento, com foco principal na criação e manutenção de APIs e na implementação de funcionalidades de cadastro de usuários , `,
    technologies: ["Laravel", "Vue.js", "Mysql", "Html", "Css" ],
  },
  {
    year: "2023 - 2024",
    role: "Aprendiz Desenvolvedor Web",
    company: "Transvilla",
    description: `Durante essa experiência, desenvolvi habilidades fundamentais em manipulação de dados usando Laravel. Realizei operações de backend e exibi os resultados nas views utilizando HTML e Bootstrap, o que me permitiu criar interfaces de usuário interativas e responsivas.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
    
];

export const PROJECTS = [
  {
    title: "Netflix",
    image: project1,
    description:
      "Apresento aqui um projeto inspirado no design da Netflix, no qual desenvolvi exclusivamente a interface frontend. A API utilizada para obter os dados dos filmes foi fornecida pelo The Movie Database (TMDb).",
    technologies: ["JavaScript", "React", "Tailwind"],
    link: "https://netflix-d.vercel.app/" // Adicione o link único do projeto
  },
  {
    title: "Aviator",
    image: project2,
    description:
      "Desenvolvi um jogo com o objetivo de explorar em profundidade a biblioteca Pygame",
    technologies: ["Python", "PyGame"],
    link: "https://github.com/seuprojeto/aviator-game" // Adicione o link único do projeto
  },
];


export const CONTACT = {
  address: "Poços de Caldas, Brasil, ",
  phoneNo: "+55 35910171728 ",
  email: "felipesiquierasantossilva@gmail.com",
};
