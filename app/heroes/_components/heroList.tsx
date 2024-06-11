import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useHero } from "@/app/contexts/HeroContext";

export interface Hero {
  id: number;
  localized_name: string;
  primary_attr: string;
}

interface HeroStats {
  id: number;
  localized_name: string;
  img: string; // URL da imagem do herói
}

interface HeroesListProps {
  heroes: Hero[];
  attribute: string;
}

const attributeNames: { [key: string]: string } = {
  str: "Força",
  agi: "Agilidade",
  int: "Inteligência",
  all: "Universal",
};

const HeroList: React.FC<HeroesListProps> = ({ heroes, attribute }) => {
  const { selectedHeroId, setHeroId } = useHero();

  const bgColor =
    attribute === "str"
      ? "bg-red-300"
      : attribute === "agi"
      ? "bg-green-300"
      : attribute === "int"
      ? "bg-blue-300"
      : "bg-purple-200";
  const textColor =
    attribute === "str"
      ? "text-red-700"
      : attribute === "agi"
      ? "text-green-700"
      : attribute === "int"
      ? "text-blue-700"
      : "text-purple-700";

  const attributeName = attributeNames[attribute];
  const [heroStats, setHeroStats] = useState<HeroStats[]>([]);

  useEffect(() => {
    const fetchHeroStats = async () => {
      try {
        const response = await fetch("https://api.opendota.com/api/heroStats/");
        if (!response.ok) {
          throw new Error("Erro ao buscar os stats dos heróis");
        }
        const data = await response.json();
        setHeroStats(data);
      } catch (error) {
        console.error("Erro ao buscar os stats dos heróis:", error);
      }
    };

    fetchHeroStats();
  }, []);

  const sortedHeroes = heroes
    .filter((hero) => hero.primary_attr === attribute)
    .sort((a, b) => a.localized_name.localeCompare(b.localized_name));

  return (
    <div className={`px-5 pb-5 pt-2 ${bgColor} rounded-lg mt-4`}>
      <h2 className={`text-lg font-bold ${textColor} pb-2`}>{attributeName}</h2>
      <div className="grid grid-cols-8 gap-1">
        {sortedHeroes.map((hero) => {
          const heroStat = heroStats.find((stat) => stat.id === hero.id);
          if (!heroStat) return null;
          return (
            <Link key={hero.id} href={`/heroes/${hero.id}`}>
              <Button
                className={`rounded shadow p-0 h-16 w-24 flex justify-center items-center text-center hover:bg-transparent`}
                onClick={() => setHeroId(hero.id)}
              >
                <img
                  src={`https://cdn.dota2.com${heroStat.img}`}
                  alt={hero.localized_name}
                  className="w-24 h-16 rounded-sm"
                />
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HeroList;
