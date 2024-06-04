import { Project } from "./Project";

export function Portfolio() {
  return (
    <div className="w-full flex flex-col justify-between gap-16 mb-24">
      <Project
        imageAlt="Devices Cashflow"
        imageSrc="/devices-cashflow.svg"
        title="Experiência"
        text="Tenho anos de experiência em desenvolvimento de software, criando soluções eficientes e inovadoras para diversas necessidades."
      />
      <Project
        imageAlt="Devices Mobiliza"
        imageSrc="/devices-mobiliza.svg"
        title="Projetos Relevantes"
        text="Participei de projetos que são usados por milhares de pessoas ao redor do mundo, focando sempre na qualidade e satisfação do usuário."
      />
      <Project
        imageAlt="Devices USEFLOW"
        imageSrc="/devices-useflow.svg"
        title="Experiência Internacional"
        text="Já participei de projetos internacionais, colaborando com equipes diversificadas e enfrentando desafios globais."
      />
    </div>
  );
}
