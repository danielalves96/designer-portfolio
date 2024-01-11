"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Website Portfólio",
    description: "Uma forma prática para reunir todos projetos web e mobile.",
    image: "/images/projects/portifolio.jpg",
    tag: ["Todos", "Web", "Mobile"],
    figmaMobile: "https://www.figma.com/proto/AohAyt1AZHUfphwBUza10e/Website-Portf%C3%B3lio---Mobile?type=design&node-id=1-27&t=pTaZX9V1p6kd7RZg-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3&hide-ui=0",
    figmaDesktop: 'https://www.figma.com/proto/z2fEWnYItMuLoE1oq44aKF/Design-Portif%C3%B3lio?type=design&node-id=0-3&t=nzonjtCg1tjCzbJX-1&scaling=scale-down&page-id=0%3A1&mode=design',
    dribbbleUrl: "https://dribbble.com/shots/23376698-Website-Portf-lio",
    behanceUrl: "https://www.behance.net/gallery/188157771/Website-Portfolio"
  },
  {
    id: 2,
    title: "SHEBANK - Bank App",
    description: "App de banco pensado para mulheres.",
    image: "/images/projects/bank_app.jpg",
    tag: ["Todos", "Mobile"],
    figmaMobile: "https://www.figma.com/proto/CHp0Qm82EETUZsYaSXT6Sr/SHEBANK?embed_host=share&kind=proto&node-id=12-494&page-id=0%3A1&scaling=scale-down&t=4eDIsBiZRXMLhGpj-1&type=design&viewport=1443%2C809%2C0.7&hide-ui=0",
    figmaDesktop: '',
    dribbbleUrl: "https://dribbble.com/shots/23383600-SHEBANK-Bank-App",
    behanceUrl: "https://www.behance.net/gallery/188233413/SHEBANK-Bank-App"
  },
  {
    id: 3,
    title: "Link In Bio - Web & Mobile",
    description: "App para cadastrar links.",
    image: "/images/projects/linkApp.jpg",
    tag: ["Todos", "Web", "Mobile"],
    figmaMobile: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FozhyV3IXT4wcfcUXrKsJok%2FLink-In-Bio-App-e-Desktop%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D3-887%26viewport%3D954%252C202%252C0.25%26t%3D4GRnwDw4NYnj7lfg-1%26scaling%3Dscale-down%26mode%3Ddesign",
    figmaDesktop: 'https://www.figma.com/proto/ozhyV3IXT4wcfcUXrKsJok/Link-In-Bio-App-e-Desktop?embed_host=share&kind=proto&node-id=8-642&page-id=8%3A638&scaling=scale-down&t=2Z5BL9tbIzdZ6XND-1&type=design&viewport=866%2C564%2C0.43',
    dribbbleUrl: "https://dribbble.com/shots/23389012-Link-in-Bio-Mobile-Web-APP",
    behanceUrl: "https://www.behance.net/gallery/188308869/Link-in-Bio-Mobile-Web-APP"
  },
  {
    id: 4,
    title: "WAVE - SURF STORE APP",
    description: "Projeto de aplicativo de e-commerce para surfistas.",
    image: "/images/projects/surf.png",
    tag: ["Todos", "Mobile"],
    figmaMobile: "https://www.figma.com/proto/hiBzC0BNogPSYVEtjacp1w/Projeto-Wave?embed_host=share&kind=proto&node-id=9-444&page-id=1%3A4&scaling=scale-down&starting-point-node-id=9%3A15&t=j6nggM13OYT9EbYo-1&type=design&viewport=280%2C427%2C0.48",
    figmaDesktop: '',
    dribbbleUrl: "https://dribbble.com/shots/23416864-WAVE-Mockups-Surf-Store-APP",
    behanceUrl: "https://www.behance.net/gallery/188661609/WAVE-Mockups-%28Surf-Store-APP%29"
  },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["Todos", "Web"],
  //   figmaMobile: "/",
  //   dribbbleUrl: "/",
  //   behanceUrl: "/"
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["Todos", "Web"],
  //   figmaMobile: "/",
  //   dribbbleUrl: "/",
  //   behanceUrl: "/"
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-8">
        Meus projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.sort((a, b) => (b.id - a.id)).map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              figmaMobile={project.figmaMobile}
              figmaDesktop={project.figmaDesktop}
              dribbbleUrl={project.dribbbleUrl}
              behanceUrl={project.behanceUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
