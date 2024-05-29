import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import FindGame from "../findGame";
import { Accordion } from "@/components/ui/accordion";
import JogarContraBots from "./gameTabBots";
import JogarCopaDeBatalhas from "./gameTabBattleCup";
import JogarSalaPersonalizada from "./gameTabCustomGame";
import JogarCompetitiva from "./gameTabCompetitive";
import JogarCasualGame from "./gameTabCasual";
import JogarModoNovato from "./gameTabNewers";

const GameTab = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <FindGame />
        </SheetTrigger>

        <SheetContent className="flex flex-col justify-end bg-black h-full">
          <div className="flex flex-col justify-items-end">
            <Accordion
              type="single"
              collapsible
              className=" flex flex-col text-stone-500 gap-3"
            >
              <JogarCopaDeBatalhas />
              <JogarSalaPersonalizada />
              <JogarContraBots />
              <JogarCompetitiva />
              <JogarCasualGame />
              <JogarModoNovato />
            </Accordion>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default GameTab;
