import { Banner } from "@/components/common/Banner";
import { Header } from "@/components/common/Header";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Header />
      <div className="w-full max-w-screen-xl">
        <Banner />
      </div>
    </main>
  );
}
