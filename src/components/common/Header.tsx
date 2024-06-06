"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  function delay() {
    return new Promise((resolve) => {
      const delay = 400;
      setTimeout(() => {
        resolve(null);
      }, delay);
    });
  }

  const goToWithDelay = async (id: string) => {
    await delay();
    window.location.href = id;
  };

  return (
    <header
      className="w-full px-8 lg:px-24 py-8 flex justify-between items-center"
      id="home"
    >
      <p className="text-xl font-medium">Johnny Ferreira</p>
      <ul className="text-lg font-medium hidden md:flex items-center gap-12">
        <li>
          <Link href="#about-me">Sobre mim</Link>
        </li>
        <li>
          <Link href="#portfolio">Porfólio</Link>
        </li>
      </ul>

      <Button className="hidden md:inline-flex" size="lg" asChild>
        <Link href="#contact">
          <span>Vamos conversar</span>
        </Link>
      </Button>

      <Sheet>
        <SheetTrigger className="block md:hidden">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetHeader className="text-start">
            <SheetTitle>Johnny Ferreira</SheetTitle>
            <SheetDescription>Software Developer</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col justify-between flex-1">
            <ul className="flex flex-col text-lg font-medium gap-1 flex-1 pt-8">
              <li>
                <SheetClose asChild>
                  <Button
                    className="px-0 text-lg"
                    size="lg"
                    variant="link"
                    onClick={() => goToWithDelay("#about-me")}
                  >
                    Sobre mim
                  </Button>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Button
                    className="px-0 text-lg"
                    size="lg"
                    variant="link"
                    onClick={() => goToWithDelay("#portfolio")}
                  >
                    Porfólio
                  </Button>
                </SheetClose>
              </li>
            </ul>
            <div>
              <SheetClose asChild>
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => goToWithDelay("#contact")}
                >
                  <span>Vamos conversar</span>
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
