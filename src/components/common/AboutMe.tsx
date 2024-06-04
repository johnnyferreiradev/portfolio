import { AboutMeItem } from "./AboutMeItem";

const START_YEAR = 2020;

export function AboutMe() {
  const currentYear = new Date().getFullYear();
  const numberOfXPYears = currentYear - START_YEAR;

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between gap-8 mb-24">
      <AboutMeItem
        imageAlt="rocket"
        imageSrc="/rocket.svg"
        title="Experiência"
        text={`Tenho ${numberOfXPYears} anos de experiência em desenvolvimento de software, criando soluções eficientes e inovadoras para diversas necessidades.`}
      />
      <AboutMeItem
        imageAlt="cloud"
        imageSrc="/cloud.svg"
        title="Projetos Relevantes"
        text="Participei de projetos que são usados por milhares de pessoas ao redor do mundo, focando sempre na qualidade e satisfação do usuário."
      />
      <AboutMeItem
        imageAlt="globe"
        imageSrc="/globe.svg"
        title="Experiência Internacional"
        text="Já participei de projetos internacionais, colaborando com equipes diversificadas e enfrentando desafios globais."
      />
    </div>
  );
}
