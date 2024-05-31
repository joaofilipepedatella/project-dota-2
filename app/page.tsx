import Image from "next/image";
import ActualGroup from "./_components/groupActual";
import GameTab from "./_components/_gameTab/gameTab";

export default function Home() {
  return (
    <div className="w-full h-full">
      <ActualGroup />
      <GameTab />
    </div>
  );
}
