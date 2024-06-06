import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@/settings";

export function Footer() {
  return (
    <footer className="w-full flex justify-center">
      <div
        className={cn(
          "w-full max-w-screen-xl px-8 lg:px-24 py-32",
          "flex gap-8 flex-col md:flex-row items-center md:items-start justify-between"
        )}
      >
        <div className="flex flex-col justify-between items-center md:items-start flex-1 gap-4">
          <h5 className="text-lg font-semibold">Johnny Ferreira</h5>
          <div className="flex items-center gap-4">
            <Link href={LINKEDIN_URL || ""} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </Link>
            <Link href={GITHUB_URL || ""} target="_blank">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </Link>
            <Link href={INSTAGRAM_URL || ""} target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </Link>
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          <ul>
            <li>
              <Button asChild variant="link" className="text-base">
                <Link href="#">Home</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link" className="text-base">
                <Link href="#">Sobre mim</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link" className="text-base">
                <Link href="#">Portfólio</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link" className="text-base">
                <Link href="#">Contato</Link>
              </Button>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-end flex flex-col justify-between flex-1 gap-4">
          <p>Desenvolvido por Johnny Ferreira</p>
          <p className="text-slate-400 text-sm">
            © 2024 Johnny Ferreira - Desenvolvedor de software
          </p>
        </div>
      </div>
    </footer>
  );
}
