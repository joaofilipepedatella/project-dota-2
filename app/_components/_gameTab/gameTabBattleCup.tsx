import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TrophyIcon } from "lucide-react";

const JogarCopaDeBatalhas = () => {
  return (
    <>
      <AccordionItem value="item-1" className="bg-slate-800/80 border-none">
        <AccordionTrigger className="flex px-2">
          <span>COPA DE BATALHAS</span>{" "}
          <TrophyIcon className="fill-yellow-400 text-yellow-500" />
        </AccordionTrigger>
        <AccordionContent className="bg-slate-600/80 text-stone-300">
          <p className="p-2">Você é ruim, vai jogar turbinho! :3~</p>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default JogarCopaDeBatalhas;
