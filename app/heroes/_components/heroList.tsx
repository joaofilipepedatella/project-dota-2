import React from "react";

interface Hero {
  id: number;
  localized_name: string;
  primary_attr: string;
}

interface HeroesListProps {
  heroes: Hero[];
  attribute: string;
}

const attributeNames: { [key: string]: string } = {
  str: "Força",
  agi: "Agilidade",
  int: "Inteligência",
  all: "Universal",
};

const HeroList: React.FC<HeroesListProps> = ({ heroes, attribute }) => {
  const bgColor =
    attribute === "str"
      ? "bg-red-200"
      : attribute === "agi"
      ? "bg-green-200"
      : attribute === " int"
      ? "bg-blue-200"
      : "bg-purple-200";
  const textColor =
    attribute === "str"
      ? "text-red-700"
      : attribute === "agi"
      ? "text-green-700"
      : attribute === "int"
      ? "text-blue-700"
      : "text-purple-700";

  const attributeName = attributeNames[attribute];

  return (
    <div className={`p-5 ${bgColor} rounded-lg mt-4`}>
      <h2 className={`text-lg font-bold ${textColor}`}>{attributeName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {heroes
          .filter((hero) => hero.primary_attr === attribute)
          .map((hero) => (
            <div key={hero.id} className={`p-2 ${bgColor} rounded shadow`}>
              {hero.localized_name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default HeroList;
