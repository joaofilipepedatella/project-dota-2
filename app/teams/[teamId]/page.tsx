"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import TeamPlayerComponent from "../_component/teamPlayers";
import { ProPlayer, Team } from "../page";
import TeamMostUsedHeroes from "../_component/teamMostUsedHeroes";

const TeamPage = () => {
  const { teamId } = useParams();
  const [selectedTeam, setSelectedTeam] = useState<Team>({});
  const [teamMembers, setTeamMembers] = useState<ProPlayer[]>([]);

  useEffect(() => {
    // fetch team data
    const fetchTeam = async () => {
      try {
        const response = await fetch(
          `https://api.opendota.com/api/teams/${teamId}`
        );

        if (!response) {
          throw new Error("Failed to fetch team data");
        }

        const teamData: Team = await response.json();

        setSelectedTeam(teamData);
      } catch (error) {
        console.error("Error to fetch team data", error);
      }
    };
    fetchTeam();
  }, [teamId]);

  useEffect(() => {
    //fetch team members
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch(
          `https://api.opendota.com/api/teams/${teamId}/players`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch team data");
        }

        const teamMembersData = await response.json();

        setTeamMembers(teamMembersData);
      } catch (error) {
        console.error("Error to fetch team members data", error);
      }
    };
    fetchTeamMembers();
  }, [teamId]);

  return (
    <div className="flex flex-col text-white p-10 gap-10 max-h-[85vh] justify-around">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-0 py-4 rounded-lg bg-slate-800/90">
          <img
            src={selectedTeam.logo_url || "#"}
            alt={selectedTeam.name || "Team Logo"}
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl">{selectedTeam.name}</h1>
            <span>({selectedTeam.tag})</span>
          </div>
        </div>
      </div>
      <div className="flex justify-around gap-4 text-slate-400 p-6 rounded-lg">
        <div className="bg-slate-800/90 p-5 rounded-lg gap-2">
          <div className="flex flex-col gap-4 text-slate-400 bg-slate-700/10 p-6 rounded-lg">
            <h1 className="font-semibold text-xl text-white">
              Membros da equipe
            </h1>
            <ul className="grid grid-cols-3 gap-2">
              {teamMembers.map(
                (member) =>
                  member.is_current_team_member && (
                    <TeamPlayerComponent
                      key={member.account_id}
                      player={member}
                    />
                  )
              )}
            </ul>
          </div>
        </div>
        <div className="bg-slate-800/90 p-5 rounded-lg">
          <TeamMostUsedHeroes teamId={Number(teamId)} />
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
