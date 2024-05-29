import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TrophyIcon } from "lucide-react";

const JogarCopaDeBatalhas = () => {
  return (
    <>
      <AccordionItem value="item-1" className="bg-stone-800 border-none">
        <AccordionTrigger className="flex px-2">
          <span>COPA DE BATALHAS</span>{" "}
          <TrophyIcon className="fill-yellow-400 text-yellow-500" />
        </AccordionTrigger>
        <AccordionContent>
          Você é ruim, vai jogar turbinho! :3~
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default JogarCopaDeBatalhas;
