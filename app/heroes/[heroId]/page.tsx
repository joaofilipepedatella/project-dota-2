"use client";

import { useParams } from "next/navigation";
import heroes from "@/public/heroes.json";
import HeroInfo from "./_components/heroInfo";
import HeaderHeroes from "../_components/header";
import HeroImage from "./_components/heroImage";
import HeroProPlayers from "./_components/heroProPlayers";

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
      <div className="flex items-center justify-center w-full min-h-[80vh] p-20">
        <HeroInfo hero={hero} />
        <HeroImage hero={hero} />
        <HeroProPlayers heroId={hero.id} />
      </div>
    </>
  );
};

export default HeroPage;
