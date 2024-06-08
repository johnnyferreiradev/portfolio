import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Johnny Ferreira",
  description:
    "Johnny Ferreira - Desenvolvedor de software. Desenvolvimento web e de aplicativos móveis.",
  robots: "index, follow",
  keywords: [
    "desenvolvedor de software",
    "desenvolvimento web",
    "desenvolvimento de aplicativos móveis",
    "NextJs",
    "Tailwind CSS",
    "Zustand",
    "NestJs",
    "Postgres",
    "React Native",
    "React",
    "frontend developer",
    "desenvolvedor frontend",
    "programador",
    "programador frontend",
    "programador de aplicativos",
    "programador de sites",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full">
      <body className={cn(inter.className, "w-full")}>{children}</body>
    </html>
  );
}
