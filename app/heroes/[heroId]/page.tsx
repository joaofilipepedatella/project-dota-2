"use client";

import { useParams } from "next/navigation";
import heroes from "@/public/heroes.json";
import HeroInfo from "./_components/heroInfo";
import HeaderHeroes from "../_components/header";
import HeroImage from "./_components/heroImage";

const findHeroById = (id: number) => {
  return heroes.find((hero) => hero.id === id);
};

const HeroPage = () => {
  const { heroId } = useParams();
  const heroIdNumber = Number(heroId);
  const hero = findHeroById(heroIdNumber);
  if (!hero) {
    return <div>Herói não encontrado</div>;
  }

  return (
    <>
      <HeaderHeroes />
      <div className="flex flex-row w-full h-full items-center relative">
        <HeroInfo hero={hero} />
        <HeroImage hero={hero} />
      </div>
    </>
  );
};

export default HeroPage;
