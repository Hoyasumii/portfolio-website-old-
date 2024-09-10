import { Metadata } from "next";
import { Card, Title } from "@/components";
import slugify from "slugify";
import { Projects } from "@/services";
import Image from "next/image";
import { getDate } from "@/utils";

export const metadata: Metadata = {
  title: "Meus Projetos",
  description: "Alan Reis Anjos",
};

export default async function Page() {
  return (
    <div className="content">
      <div className="content__container">
        <Title value="Meus Projetos" />
        <p>Aqui estão alguns dos meus projetos.</p>
      </div>
      
      <div className="content__grid">
        {Projects.map((project) => (
          <Card
            date={getDate(project.date)}
            description={project.description}
            imgSrc={project.imgSrc}
            title={project.title}
            key={slugify(project.title)}
            href={project.href}
          />
        ))}
      </div>
    </div>
  );
}
