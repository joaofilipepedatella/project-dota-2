"use client";

import { useParams } from "next/navigation";
import proPlayers from "@/public/proPlayers.json";
import ProPlayerDetails from "../_components/proPlayerDetails";

const findPlayerById = (id: number) => {
  return proPlayers.find((player) => player.account_id === id);
};

const PlayerPage = () => {
  const { playerId } = useParams();
  const playerIdNumber = Number(playerId);
  const proPlayer = findPlayerById(playerIdNumber);
  if (proPlayer) {
    return (
      <div className="h-full">
        <ProPlayerDetails player={proPlayer} />
      </div>
    );
  } else {
    return <div>Player não encontrado</div>;
  }
};

export default PlayerPage;
