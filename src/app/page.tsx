import { AboutMe } from "@/components/common/AboutMe";
import { Banner } from "@/components/common/Banner";
import { Header } from "@/components/common/Header";
import { Portfolio } from "@/components/common/Portfolio";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Header />
      <div className="w-full max-w-screen-xl">
        <Banner />
        <Section title="Sobre mim">
          <AboutMe />
        </Section>
        <Section
          title="Portfólio"
          actions={
            <Button
              variant="link"
              className="font-semibold text-base text-indigo-600"
            >
              Ver todos
            </Button>
          }
        >
          <Portfolio />
        </Section>
      </div>
    </main>
  );
}
