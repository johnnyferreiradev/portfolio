import { AboutMe } from "@/components/common/AboutMe";
import { Banner } from "@/components/common/Banner";
import { Header } from "@/components/common/Header";
import { Section } from "@/components/common/Section";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Header />
      <div className="w-full max-w-screen-xl">
        <Banner />
        <Section title="Sobre mim">
          <AboutMe />
        </Section>
      </div>
    </main>
  );
}
