import { PROJECT_LIST } from "@/data/projects";
import { Project } from "./Project";
import { Button } from "../ui/button";
import Link from "next/link";
import { ALL_PROJECTS_URL } from "@/settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function Portfolio() {
  return (
    <div className="w-full flex flex-col justify-between items-center gap-16 mb-16">
      {PROJECT_LIST.map((item, index) => (
        <Project
          key={index}
          imageAlt={item.imageAlt}
          imageSrc={item.imageSrc}
          title={item.title}
          text={item.description}
          accessTips={item.accessTips}
          techs={item.techs}
          url={item.url}
        />
      ))}
      <Button
        variant="link"
        asChild
        className="w-max font-medium text-indigo-600 text-center md:text-start px-0 text-base mt-6"
      >
        <Link href={ALL_PROJECTS_URL || ""} target="_blank">
          <span className="mr-2">Ver todos os projetos</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </Button>
    </div>
  );
}
