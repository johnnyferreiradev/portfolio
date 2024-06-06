import { AboutMe } from "@/components/common/AboutMe";
import { Banner } from "@/components/common/Banner";
import { ContactMe } from "@/components/common/ContactMe";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { Portfolio } from "@/components/common/Portfolio";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { ALL_PROJECTS_URL } from "@/settings";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Header />
      <div className="w-full">
        <Banner />
        <Section title="Sobre mim">
          <AboutMe />
        </Section>
        <Section
          title="Portfólio"
          actions={
            <Button
              variant="link"
              asChild
              className="font-medium text-indigo-600 text-center md:text-start px-0 text-base"
            >
              <Link href={ALL_PROJECTS_URL || ""} target="_blank">
                <span className="mr-2">Ver todos</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            </Button>
          }
        >
          <Portfolio />
        </Section>
        <Section className="bg-slate-950">
          <ContactMe />
        </Section>
        <Footer />
      </div>
    </main>
  );
}
