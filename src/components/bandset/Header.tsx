"use client";

import { Button } from "../ui/button";

export function Header() {
  return (
    <header
      className="w-full px-8 lg:px-24 py-8 flex justify-between items-center"
      id="home"
    >
      <p className="text-xl font-medium">BandSet</p>

      <Button className="hidden md:inline-flex" size="lg">
        <span>Play</span>
      </Button>
    </header>
  );
}
