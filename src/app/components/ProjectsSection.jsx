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
    figmaUrl: "https://www.figma.com/proto/AohAyt1AZHUfphwBUza10e/Website-Portf%C3%B3lio---Mobile?type=design&node-id=1-27&t=pTaZX9V1p6kd7RZg-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3&hide-ui=1",
    dribbbleUrl: "https://dribbble.com/shots/23376698-Website-Portf-lio",
    behanceUrl: "https://www.behance.net/gallery/188157771/Website-Portfolio"
  },
  // {
  //   id: 2,
  //   title: "Potography Portfolio Website",
  //   description: "Project 2 description",
  //   image: "/images/projects/2.png",
  //   tag: ["Todos", "Web"],
  //   figmaUrl: "/",
  //   dribbbleUrl: "/",
  //   behanceUrl: "/"
  // },
  // {
  //   id: 3,
  //   title: "E-commerce Application",
  //   description: "Project 3 description",
  //   image: "/images/projects/3.png",
  //   tag: ["Todos", "Web"],
  //   figmaUrl: "/",
  //   dribbbleUrl: "/",
  //   behanceUrl: "/"
  // },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["Todos", "Mobile"],
  //   figmaUrl: "/",
  //   dribbbleUrl: "/",
  //   behanceUrl: "/"
  // },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["Todos", "Web"],
  //   figmaUrl: "/",
  //   dribbbleUrl: "/",
  //   behanceUrl: "/"
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["Todos", "Web"],
  //   figmaUrl: "/",
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
        {filteredProjects.map((project, index) => (
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
              figmaUrl={project.figmaUrl}
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
