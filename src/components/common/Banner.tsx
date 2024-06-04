import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export function Banner() {
  return (
    <div
      className={cn(
        "w-full px-8 lg:px-24 py-8 min-h-[calc(100vh-92px)]",
        "flex justify-between items-center gap-8"
      )}
    >
      <div className="w-full max-w-screen-sm flex flex-col gap-2">
        <h1 className="text-5xl font-bold leading-[54px]">
          Olá, sou Johnny Ferreira. Desenvolvedor de software.
        </h1>
        <p className="text-lg">Desenvolvimento web e de aplicativos móveis.</p>
        <div className="my-8 flex items-center gap-3">
          <Link href="#">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </Link>
        </div>
        <Button className="w-max" size="lg">
          <FontAwesomeIcon icon={faArrowDown} className="mr-2" /> Entre em
          contato
        </Button>
      </div>
      <Image
        src="/welcome-illustration.svg"
        alt="Johnny Ferreira"
        width={440}
        height={440}
      />
    </div>
  );
}
