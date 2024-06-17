import React from "react";
import { ProPlayer } from "../page";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface TeamPlayerProps {
  player: ProPlayer;
}

const TeamPlayerComponent: React.FC<TeamPlayerProps> = ({
  player,
}: TeamPlayerProps) => {
  return (
    <Link key={player.account_id} href={`/players/${player.account_id}`}>
      <Button
        className={`rounded shadow p-0 m-2 h-16 w-24 bg-transparent hover:bg-transparent`}
      >
        <div className="flex flex-col gap-2 justify-center items-center text-center p-2">
          <img src={player.avatarmedium} alt={player.name} />
          <h2>{player.name}</h2>
        </div>
      </Button>
    </Link>
  );
};

export default TeamPlayerComponent;
