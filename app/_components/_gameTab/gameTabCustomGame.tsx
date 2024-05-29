import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon, SearchIcon } from "lucide-react";

const JogarSalaPersonalizada = () => {
  return (
    <>
      <AccordionItem value="item-2" className="bg-stone-800 border-none">
        <AccordionTrigger className="px-2">
          SALAS PERSONALIZADAS
        </AccordionTrigger>
        <AccordionContent className="bg-stone-600 text-stone-300 flex items-center justify-center">
          <div className="flex justify-around items-center h-full w-full">
            <div className="flex justify-center items-center gap-2 border py-0.5 px-4 mt-4 w-1/3">
              <PlusIcon size={10} />

              <p className="text-xs font-semibold">CRIAR</p>
            </div>
            <div className="flex justify-center items-center gap-2 border py-0.5 px-4 mt-4 w-1/3">
              <SearchIcon size={10} />

              <p className="text-xs font-semibold">NAVEGAR</p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default JogarSalaPersonalizada;
