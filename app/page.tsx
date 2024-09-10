import { Contacts, Icon, Title } from "@/components";
import "./page.style.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div className="content home">
      <Icon src="/me.jpg" />
      <div className="content__text">
        <Title value="Alan Reis Anjos" />
        <p>
          Sou um desenvolvedor versátil, apaixonado pelo mundo da tecnologia.
        </p>
        <p>Use esta página para conhecer mais sobre mim e ver meus projetos.</p>
      </div>
      <Contacts email="mailto:alanreisanjo@gmail.com" github="https://github.com/Hoyasumii" linkedin="https://www.linkedin.com/in/alanreisanjos/" />
    </div>
  );
}
