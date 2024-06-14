import ProPlayerDetails from "@/app/players/_components/proPlayerDetails";
import React, { useState, useEffect } from "react";

interface ProPlayer {
  account_id: number;
  games_played: number;
  wins: number;
}

const HeroProPlayers = ({ heroId }: { heroId: number }) => {
  const [proPlayers, setProPlayers] = useState<ProPlayer[]>([]);

  useEffect(() => {
    const fetchProPlayers = async () => {
      const response = await fetch(
        `https://api.opendota.com/api/heroes/${heroId}/players`
      );
      const proPlayersData = await response.json();
      setProPlayers(proPlayersData.slice(0, 6)); // Renderizar apenas 6 objetos
    };
    fetchProPlayers();
  }, [heroId]);

  return (
    <div>
      <h2>Top 6 Pro Players who play {heroId}</h2>
      <ul>
        {proPlayers.map((proPlayer) => (
          <ProPlayerDetails
            key={proPlayer.account_id}
            account_id={proPlayer.account_id}
          />
        ))}
      </ul>
    </div>
  );
};

export default HeroProPlayers;
