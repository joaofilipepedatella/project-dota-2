import Image from "next/image";
import ActualGroup from "./_components/groupActual";
import FindGame from "./_components/findGame";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import GameTab from "./_components/gameTab";

export default function Home() {
  return (
    <div className="min-w-full min-h-full">
      <div>
        <Image
          src="/dota-2-bg.jpg"
          layout="fill"
          objectFit="cover"
          alt="dota 2 background"
        />
      </div>

      <ActualGroup />
      <GameTab />
    </div>
  );
}
