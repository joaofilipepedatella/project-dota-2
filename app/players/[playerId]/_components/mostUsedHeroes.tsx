import React, { useState, useEffect } from "react";
import { ProPlayerProps } from "../page";
import heroesImage from "@/public/heroesImage.json";
import Link from "next/link";

interface HeroStats {
  hero_id: number;
  win: number;
  games: number;
}

const MostUsedHeroes: React.FC<ProPlayerProps> = ({ player }) => {
  const [heroesStats, setHeroesStats] = useState<HeroStats[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHeroesStats = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.opendota.com/api/players/${player.account_id}/heroes`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: HeroStats[] = await response.json();
        setHeroesStats(data);
      } catch (error) {
        console.error("Erro ao buscar os heróis:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroesStats();
  }, [player]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  const topHeroes = heroesStats
    .sort((a, b) => b.win - a.win)
    .slice(0, 6)
    .map((hero) => {
      const heroImage = heroesImage.heroes.find((h) => h.id === hero.hero_id);
      return {
        ...hero,
        image: heroImage ? heroImage.url_full_portrait : "",
        name: heroImage ? heroImage.localized_name : "Desconhecido",
      };
    });

  if (topHeroes.length === 0) {
    return null; // Retorna null se não houver nenhum herói com vitórias registradas
  }

  return (
    <div className="flex flex-col gap-4 text-slate-400 bg-slate-700/10 p-6 rounded-lg">
      <h2 className="font-semibold text-xl text-white">Heróis mais jogados</h2>
      <ul className="grid grid-cols-3 gap-2">
        {topHeroes.map((hero) => (
          <Link key={hero.hero_id} href={`/heroes/${hero.hero_id}`}>
            <li
              key={hero.hero_id}
              className="flex flex-col py-4 px-1 justify-center items-center bg-slate-700/20 rounded-lg space-y-2"
            >
              {hero.image && (
                <img
                  src={hero.image}
                  alt={hero.name}
                  width={100}
                  className="rounded-lg"
                />
              )}
              <div className="flex flex-col justify-center items-center gap-1">
                <span className="text-wrap">{hero.name}</span>
                <span>Vitórias: {hero.win}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MostUsedHeroes;
