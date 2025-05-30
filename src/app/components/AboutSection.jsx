/* eslint-disable jsx-a11y/alt-text */
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
        <li>Pós graduação em DEsign de Produto pela faculdade Facprisma</li>
        <li>
          Bacharelado em Medicina Veterinária pela Universidade Tuiuti do Paraná{" "}
        </li>
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
        <li>Design UX/UI | Cubos Acabemy</li>
        <li>Design System | Definindo Estilos e Tokens</li>
        <li>Design System | Projetando e Construindo Componentes</li>
        <li>UX Design de A a Z | Tudo sobre experiência do usuário</li>
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-10">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          className="hidden md:block"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg">
            Olá, sou Paola Oliveira, natural de Curitiba, sou Designer de
            Interface com experiência em criação e manutenção de layouts para
            produtos digitais, focando em proporcionar uma experiência do
            usuário intuitiva e envolvente. Capacidade de otimização de
            usabilidade, colaboração com equipes de desenvolvimento e manutenção
            de Design Systems, garantindo consistência visual em todos os
            produtos. Demonstro habilidade no desenvolvimento de conteúdo para
            mídias sociais, aumentando a visibilidade e o engajamento da marca.
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
