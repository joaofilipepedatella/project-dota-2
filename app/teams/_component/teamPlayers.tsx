import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProPlayer } from "../page";
import PlayerThumbnail from "@/app/heroes/[heroId]/_components/playerThumbnail";

interface TeamPlayerProps {
  player: ProPlayer;
}

const TeamPlayerComponent: React.FC<TeamPlayerProps> = ({
  player,
}: TeamPlayerProps) => {
  return (
    <div>
      <PlayerThumbnail accountId={player.account_id} />
    </div>
  );
};

export default TeamPlayerComponent;
