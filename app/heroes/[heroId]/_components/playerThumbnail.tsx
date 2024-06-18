import Link from "next/link";
import React, { useEffect, useState } from "react";

interface PlayerInfo {
  account_id: number;
}

interface PlayerData {
  profile: {
    account_id: number;
    avatarfull: string;
    personaname: string;
  };
}

interface PlayerThumbnailProps {
  accountId: number;
}

const PlayerThumbnail: React.FC<PlayerThumbnailProps> = ({ accountId }) => {
  const [playersInfo, setPlayersInfo] = useState<PlayerData[]>([]);

  useEffect(() => {
    const fetchPlayerInfo = async () => {
      try {
        const response = await fetch(
          `https://api.opendota.com/api/players/${accountId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch player info");
        }
        const playerData: PlayerData = await response.json();
        setPlayersInfo([playerData]);
      } catch (error) {
        console.error("Erro ao buscar informações do jogador:", error);
      }
    };

    fetchPlayerInfo();
  }, [accountId]);

  return (
    <div>
      {playersInfo.map((playerData, index) => (
        <Link
          key={playerData.profile.account_id}
          href={`/players/${playerData.profile.account_id}`}
        >
          <div
            key={index}
            className="flex flex-col py-4 px-1 justify-center items-center bg-slate-700/20 rounded-lg space-y-2"
          >
            <img
              src={playerData.profile.avatarfull}
              alt={playerData.profile.personaname ?? "Player Avatar"}
              className="w-16 h-16 rounded-full mb-2"
            />
            <span>{playerData.profile.personaname ?? "Unknown Player"}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PlayerThumbnail;
