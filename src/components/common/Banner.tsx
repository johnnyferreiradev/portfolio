import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { GITHUB_URL, LINKEDIN_URL } from "@/settings";

export function Banner() {
  return (
    <div className="w-full flex justify-center">
      <div
        className={cn(
          "w-full max-w-screen-xl min-h-[calc(100vh-108px)] px-8 lg:px-24 py-8 overflow-x-hidden",
          "flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-8"
        )}
        id="home"
      >
        <div className="w-full max-w-screen-sm flex flex-col gap-2">
          <h1 className="text-3xl md:text-5xl font-bold leading-8 md:leading-[54px]">
            Olá, sou Johnny Ferreira. Desenvolvedor de software.
          </h1>
          <h2 className="text-lg">
            Desenvolvimento web e de aplicativos móveis.
          </h2>
          <div className="my-8 flex items-center gap-3">
            <Link href={LINKEDIN_URL || ""} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </Link>
            <Link href={GITHUB_URL || ""} target="_blank">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </Link>
          </div>

          <Button className="w-full md:w-max" size="lg" asChild>
            <Link href="#contact">
              <FontAwesomeIcon icon={faArrowDown} className="mr-2" />{" "}
              <span>Entre em contato</span>
            </Link>
          </Button>
        </div>
        <Image
          src="/welcome-illustration.svg"
          alt="Johnny Ferreira"
          width={440}
          height={440}
          className="w-full max-w-[220px] md:max-w-[440px]"
        />
      </div>
    </div>
  );
}
