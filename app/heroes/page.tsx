"use client";

import { useEffect, useState } from "react";
import HeroList from "./_components/heroList";
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
    <div>
      <h1>Dota 2 Heroes</h1>
      <HeroList heroes={heroes} attribute="str" />
      <HeroList heroes={heroes} attribute="agi" />
      <HeroList heroes={heroes} attribute="int" />
      <HeroList heroes={heroes} attribute="all" />
    </div>
  );
};

export default HeroesPage;
