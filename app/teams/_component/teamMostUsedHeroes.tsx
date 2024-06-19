import React, { useState, useEffect } from "react";
import Link from "next/link";

interface HeroStats {
  hero_id: number;
  wins: number;
  games: number;
}

interface HeroData {
  id: number;
  img: string;
  localized_name: string;
}

interface TeamMostUsedHeroesProps {
  teamId: number;
}

const TeamMostUsedHeroes: React.FC<TeamMostUsedHeroesProps> = ({ teamId }) => {
  const [heroesStats, setHeroesStats] = useState<HeroStats[]>([]);
  const [heroesData, setHeroesData] = useState<HeroData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHeroesStats = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.opendota.com/api/teams/${teamId}/heroes`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch team heroes data");
        }
        const data: HeroStats[] = await response.json();
        setHeroesStats(data);
      } catch (error) {
        console.error("Erro ao buscar os heróis da equipe:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchHeroesData = async () => {
      try {
        const response = await fetch(`https://api.opendota.com/api/heroStats`);
        if (!response.ok) {
          throw new Error("Failed to fetch hero stats");
        }
        const data: HeroData[] = await response.json();
        setHeroesData(data);
      } catch (error) {
        console.error("Erro ao buscar os dados dos heróis:", error);
      }
    };

    fetchHeroesStats();
    fetchHeroesData();
  }, [teamId]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  const topHeroes = heroesStats
    .sort((a, b) => b.wins - a.wins)
    .slice(0, 6)
    .map((hero) => {
      const heroData = heroesData.find((h) => h.id === hero.hero_id);
      return {
        ...hero,
        image: heroData ? `https://cdn.dota2.com${heroData.img}` : "",
        name: heroData ? heroData.localized_name : "Desconhecido",
      };
    });

  console.log("Top heroes after mapping:", topHeroes); // <-- Log the mapped data

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
              className="flex flex-col py-4 px-1 justify-center items-center bg-slate-700/20 rounded-lg space-y-2 w-28 text-center h-full text-wrap"
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
                <span>Vitórias: {hero.wins}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TeamMostUsedHeroes;
