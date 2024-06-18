"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProPlayerDetails from "../_components/proPlayerDetails";
import MostUsedHeroes from "./_components/mostUsedHeroes";

export interface ProPlayerProps {
  player: {
    account_id: number;
    avatarfull: string | null;
    personaname: string | null;
    loccountrycode?: string | null;
    name: string;
    fantasy_role: number;
    team_id: number;
    team_name: string;
    team_tag: string;
  };
}

const PlayerPage = () => {
  const { playerId } = useParams();
  const [playerData, setPlayerData] = useState<any>(null);
  const playerIdNumber = Number(playerId);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(
          `https://api.opendota.com/api/players/${playerIdNumber}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch player data");
        }
        const data = await response.json();
        setPlayerData(data);
      } catch (error) {
        console.error("Error fetching player data:", error);
        setPlayerData(null);
      }
    };

    fetchPlayerData();
  }, [playerIdNumber]);

  if (!playerData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Player não encontrado
      </div>
    );
  }

  return (
    <div className="flex flex-col items-around min-h-[90vh] justify-center">
      <div className="flex justify-around items-center space-x-8">
        <ProPlayerDetails player={playerData.profile} />
        <MostUsedHeroes player={playerData.profile} />
      </div>
    </div>
  );
};

export default PlayerPage;
