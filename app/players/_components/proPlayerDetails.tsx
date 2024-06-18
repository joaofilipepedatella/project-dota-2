import teams from "@/public/teams.json";
import { ProPlayerProps } from "../[playerId]/page";

const ProPlayerDetails: React.FC<ProPlayerProps> = ({ player }) => {
  const team = teams.find((team) => team.team_id === player.team_id);
  const teamLogoUrl = team ? team.logo_url : "";

  return (
    <div className="flex flex-col justify-center items-start gap-4 text-slate-300">
      <div>
        <img src={player.avatarfull ?? ""} alt={player.name} />
      </div>
      <div className="flex items-end pb-5 gap-2">
        <img
          src={teamLogoUrl ?? ""}
          alt={player.team_name}
          width={50}
          height={50}
        />
        <h1 className="text-white font-semibold uppercase text-5xl ">
          {player.name}
        </h1>
        <span className="text-slate-600">({player.loccountrycode})</span>
      </div>
      <div>
        <span className="text-sm text-slate-600">Persona Name:</span> "
        {player.personaname}"
      </div>
      <div>
        <span className="text-sm text-slate-600">Equipe:</span>
        {player.team_name} ({player.team_tag})
      </div>
      <div>
        <span className="text-sm text-slate-600">Role:</span>
        {player.fantasy_role === 1
          ? " Carry"
          : player.fantasy_role === 2
          ? " Midlaner"
          : player.fantasy_role === 3
          ? " Offlaner"
          : player.fantasy_role === 4
          ? " Roamer"
          : " Support"}
      </div>
    </div>
  );
};

export default ProPlayerDetails;
