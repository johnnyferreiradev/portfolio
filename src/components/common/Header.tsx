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
  return (
    <header className="w-full px-8 lg:px-24 py-8 flex justify-between items-center">
      <p className="text-xl font-medium">Johnny Ferreira</p>
      <ul className="text-lg font-medium hidden md:flex items-center gap-12">
        <li>
          <Link href="#">Sobre mim</Link>
        </li>
        <li>
          <Link href="#">Porfólio</Link>
        </li>
      </ul>
      <Button size="lg" className="hidden md:inline-flex">
        Contact-me
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
            <ul className="flex flex-col text-lg font-medium gap-4 flex-1 pt-8">
              <li>
                <SheetClose asChild>
                  <Link href="#">Sobre mim</Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link href="#">Porfólio</Link>
                </SheetClose>
              </li>
            </ul>
            <div>
              <SheetClose asChild>
                <Button size="lg" className="w-full">
                  Contact-me
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
