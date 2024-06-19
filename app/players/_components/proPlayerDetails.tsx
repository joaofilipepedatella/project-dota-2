import React, { useEffect, useState } from "react";
import teams from "@/public/teams.json"; // Importa a lista de times de um arquivo JSON
import { ProPlayerProps } from "../[playerId]/page";

const ProPlayerDetails: React.FC<ProPlayerProps> = ({ player }) => {
  const [proPlayerData, setProPlayerData] = useState(null);
  const [teamLogoUrl, setTeamLogoUrl] = useState("");

  useEffect(() => {
    // Função para buscar dados da nova API
    const fetchProPlayerData = async () => {
      try {
        const response = await fetch("https://api.opendota.com/api/proplayers");
        const proPlayers = await response.json();
        const proPlayer = proPlayers.find(
          (p: { account_id: number }) => p.account_id === player.account_id
        );

        if (proPlayer) {
          setProPlayerData(proPlayer);

          // Se o jogador for profissional, buscar o logotipo do time
          const team = teams.find((team) => team.team_id === proPlayer.team_id);
          if (team) {
            setTeamLogoUrl(team.logo_url || "");
          }
        }
      } catch (error) {
        console.error(
          "Erro ao buscar dados dos jogadores profissionais:",
          error
        );
      }
    };

    fetchProPlayerData();
  }, [player.account_id]);

  // Usar dados do jogador profissional se disponíveis, caso contrário, usar dados antigos
  const displayedPlayer = proPlayerData || player;

  return (
    <div className="flex flex-col justify-center items-start gap-4 text-slate-300">
      <div>
        <img
          src={displayedPlayer.avatarfull ?? ""}
          alt={displayedPlayer.name}
        />
      </div>
      <div className="flex items-end pb-5 gap-2">
        {teamLogoUrl && (
          <img
            src={teamLogoUrl}
            alt={displayedPlayer.team_name}
            width={50}
            height={50}
          />
        )}
        <h1 className="text-white font-semibold uppercase text-5xl ">
          {displayedPlayer.name}
        </h1>
        <span className="text-slate-600">
          ({displayedPlayer.loccountrycode})
        </span>
      </div>
      <div>
        <span className="text-sm text-slate-600">Persona Name:</span> "
        {displayedPlayer.personaname}"
      </div>
      <div>
        <span className="text-sm text-slate-600">Equipe:</span>
        {displayedPlayer.team_name} ({displayedPlayer.team_tag})
      </div>
      <div>
        <span className="text-sm text-slate-600">Role:</span>
        {displayedPlayer.fantasy_role === 1
          ? " Carry"
          : displayedPlayer.fantasy_role === 2
          ? " Midlaner"
          : displayedPlayer.fantasy_role === 3
          ? " Offlaner"
          : displayedPlayer.fantasy_role === 4
          ? " Roamer"
          : " Support"}
      </div>
    </div>
  );
};

export default ProPlayerDetails;
