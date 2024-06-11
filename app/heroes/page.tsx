"use client";

import { useState, useEffect } from "react";
import HeaderHeroes from "./_components/header";
import HeroList from "./_components/heroList";
import { HeroProvider } from "../contexts/HeroContext";

interface Hero {
  id: number;
  localized_name: string;
  primary_attr: string;
}

const HeroesPage = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await fetch("https://api.opendota.com/api/heroes");
      const data = (await response.json()) as Hero[];
      setHeroes(data);
    };

    fetchHeroes();
  }, []);

  return (
    <>
      <HeaderHeroes />
      <div className="flex items-center justify-center mt-10">
        <HeroProvider>
          <div className="grid grid-cols-2 gap-4">
            <HeroList heroes={heroes} attribute="str" />
            <HeroList heroes={heroes} attribute="agi" />
            <HeroList heroes={heroes} attribute="int" />
            <HeroList heroes={heroes} attribute="all" />
          </div>
        </HeroProvider>
      </div>
    </>
  );
};

export default HeroesPage;
