import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const JogarCasualGame = () => {
  return (
    <>
      <AccordionItem value="item-5" className="bg-slate-800/80 border-none">
        <AccordionTrigger className="px-2">CASUAL</AccordionTrigger>
        <AccordionContent className="bg-slate-600/80 text-stone-300">
          <div>
            <div className="flex gap-1 justify-start items-center py-6 px-5 border-b">
              <Checkbox
                id="allPick"
                className="bg-black border-2 border-slate-400"
              />
              <Label htmlFor="allPick">ESCOLHA LIVRE</Label>
            </div>
            <div className="flex gap-1 justify-start items-center py-6 px-5">
              <Checkbox
                id="turbo"
                className="bg-black border-2 border-slate-400"
              />
              <Label htmlFor="turbo">TURBO</Label>
            </div>

            <Accordion
              type="single"
              collapsible
              className=" flex flex-col bg-slate-800/80 text-stone-300 w-full"
            >
              <AccordionItem value="casual-mode" className="border-none">
                <AccordionTrigger className="pl-2">
                  EXIBIR TODOS OS MODOS
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1 px-2">
                    <div className="flex gap-1 justify-start items-center">
                      <Checkbox
                        id="individualSelection"
                        className="bg-black border-2 border-slate-400"
                      />
                      <Label htmlFor="individualSelection">
                        SELEÇÃO INDIVIDUAL
                      </Label>
                    </div>
                    <div className="flex gap-1 justify-start items-center">
                      <Checkbox
                        id="randomSelection"
                        className="bg-black border-2 border-slate-400"
                      />
                      <Label htmlFor="randomSelection">SELEÇÃO ALEATÓRIA</Label>
                    </div>
                    <div className="flex gap-1 justify-start items-center">
                      <Checkbox
                        id="skillSelection"
                        className="bg-black border-2 border-slate-400"
                      />
                      <Label htmlFor="skillSelection">
                        SELEÇÃO DE HABILIDADES
                      </Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default JogarCasualGame;
