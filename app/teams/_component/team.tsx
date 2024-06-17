import React, { useState, useEffect } from "react";
import { ProPlayer, Team } from "../page";
import TeamPlayerComponent from "./teamPlayers";

interface TeamProps {
  team: Team;
}

const TeamComponent: React.FC<TeamProps> = ({ team }) => {
  const [proPlayers, setProPlayers] = useState<ProPlayer[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProPlayers = async () => {
      setLoading(true);
      try {
        const response = await fetch("/proPlayers.json");
        const data = await response.json();
        const teamProPlayers = data.filter(
          (proPlayer: { team_id: number }) => proPlayer.team_id === team.team_id
        );
        setProPlayers(teamProPlayers);
      } catch (error) {
        console.error("Erro ao buscar os proPlayers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProPlayers();
  }, [team.team_id]);

  if (proPlayers.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col bg-gradient-to-r from-slate-600/10 to-transparent my-2 p-4 gap-2">
      <div className="flex items-center gap-4">
        <img
          src={team.logo_url}
          alt={team.name}
          width={100}
          height={50}
          className="bg-black"
        />
        <div>
          <h2>{team.name}</h2>
          <p>{team.tag}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h3>Players:</h3>
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <ul className="flex">
            {proPlayers.map((proPlayer) => (
              <li key={proPlayer.account_id}>
                <TeamPlayerComponent player={proPlayer} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TeamComponent;
