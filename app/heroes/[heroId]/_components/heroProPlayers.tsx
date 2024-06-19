import React, { useState, useEffect } from "react";
import PlayerThumbnail from "./playerThumbnail";

interface PlayerData {
  account_id: number;
  wins: number;
}

interface HeroProPlayersProps {
  heroId: number;
}

const fetchWithCache = async (url: string) => {
  const cachedData = localStorage.getItem(url);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  localStorage.setItem(url, JSON.stringify(data));
  return data;
};

const HeroProPlayers: React.FC<HeroProPlayersProps> = ({ heroId }) => {
  const [playerIds, setPlayerIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const playerData: PlayerData[] = await fetchWithCache(
          `https://api.opendota.com/api/heroes/${heroId}/players`
        );
        // Filtrar jogadores com 0 vitórias
        const filteredPlayerData = playerData.filter(
          (player) => player.wins > 0
        );
        // Ordenar os jogadores pelos wins e pegar os top 6 account_ids
        const sortedPlayerIds = filteredPlayerData
          .sort((a, b) => b.wins - a.wins)
          .slice(0, 6)
          .map((player) => player.account_id);
        setPlayerIds(sortedPlayerIds);
        console.log(sortedPlayerIds);
      } catch (error) {
        console.error("Erro ao buscar os jogadores:", error);
      }
    };

    fetchPlayers();
  }, [heroId]);

  return (
    <div className="flex flex-col gap-4 text-slate-400 bg-slate-700/10 p-6 rounded-lg lg:min-w-[450px]">
      <h2 className="font-semibold text-xl text-white">Top Jogadores</h2>
      <ul className="grid grid-cols-3 gap-2">
        {playerIds.map((accountId, index) => (
          <PlayerThumbnail key={index} accountId={accountId} />
        ))}
      </ul>
    </div>
  );
};

export default HeroProPlayers;
