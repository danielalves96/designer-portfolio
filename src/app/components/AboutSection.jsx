"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Figma</li>
        <li>Canva</li>
        <li>Photoshop</li>
      </ul>
    ),
  },
  {
    title: "Formação",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li> Bacharelado em Medicina Veterinária pela Universidade Tuiuti do Paraná </li>
      </ul>
    ),
  },
  {
    title: "Cursos",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>PRO FIGMA | UI DESIGN com Figma do Zero ao especialista</li>
        <li>Figma | Cubos Acabemy</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} className="hidden md:block" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg">
            Olá, sou Paola Oliveira, natural de Curitiba, e embora seja Médica Veterinária não praticante, trago uma trajetória fascinante. Após realizar o sonho de concluir minha formação, atuei por um período na área, porém, deparei-me com a ausência de perspectivas e a falta de qualidade de vida. Foi durante essa jornada na veterinária que tive meu primeiro contato com ferramentas de design para a elaboração de documentação. Influenciada pelo meu esposo (Desenvolvedor), atualmente, dedico-me com entusiasmo ao universo do UI/UX Design. Essa transição revelou-se uma experiência incrivelmente interessante em minha vida.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Formação{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Cursos{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
