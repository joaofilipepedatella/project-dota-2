"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import proPlayersDb from "@/public/proPlayers.json";

interface ProPlayer {
  account_id: number;
  name: string;
  team_id: number;
  team_name: string;
  avatarmedium: string;
  // ... outras propriedades
}

interface Teams {
  [teamName: string]: ProPlayer[];
}

const ProPlayersPage: React.FC = () => {
  const [proPlayers, setProPlayers] = useState<ProPlayer[]>([]);
  const [teams, setTeams] = useState<Teams>({});

  useEffect(() => {
    const fetchProPlayers = async () => {
      try {
        const response = await proPlayersDb;
        setProPlayers(response as ProPlayer[]);
      } catch (error) {
        console.error("Erro ao buscar os proPlayers:", error);
      }
    };

    fetchProPlayers();
  }, []);

  useEffect(() => {
    const teamsObj: Teams = {};
    proPlayers.forEach((player) => {
      if (!teamsObj[player.team_name]) {
        teamsObj[player.team_name] = [];
      }
      teamsObj[player.team_name].push(player);
    });
    setTeams(teamsObj);
  }, [proPlayers]);

  return (
    <div
      className={`px-5 pb-5 pt-2 rounded-lg mt-4 overflow-y-auto scrollbar-hide max-h-[90vh]`}
    >
      {Object.keys(teams).map((teamName) => (
        <div
          key={teamName}
          className="bg-gradient-to-r from-slate-600/10 to-transparent my-2 p-4"
        >
          <h2 className={`text-lg font-bold text-white pb-2`}>{teamName}</h2>
          <div className="flex gap-2">
            {teams[teamName].map((player) => (
              <Link
                key={player.account_id}
                href={`/players/${player.account_id}`}
              >
                <Button
                  className={`rounded shadow p-0 m-2 h-16 w-24 flex flex-col justify-center items-center text-center hover:bg-transparent`}
                >
                  <img
                    src={`${player.avatarmedium}`}
                    alt={player.name}
                    className="w-24 h-16 rounded-sm"
                  />
                  <p>{player.name}</p>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProPlayersPage;
