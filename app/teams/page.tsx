"use client";

import React, { useState, useEffect } from "react";
import TeamComponent from "./_component/team";

export interface ProPlayer {
  account_id: number;
  team_id: number;
  name: string;
  avatarmedium: string;
}

export interface Team {
  team_id: number;
  name: string;
  tag: string;
  logo_url: string;
}

const TeamsPage = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch("teams.json")
      .then((response) => response.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <div
      className={`px-5 pb-5 pt-2 rounded-lg mt-4 overflow-y-auto scrollbar-hide max-h-[90vh]`}
    >
      <div className="flex flex-col text-white">
        <ul>
          {teams.map((team) => (
            <li key={team.team_id}>
              <TeamComponent team={team} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamsPage;
