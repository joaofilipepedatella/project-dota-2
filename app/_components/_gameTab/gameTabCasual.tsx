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
      <AccordionItem value="item-5" className="bg-stone-800 border-none">
        <AccordionTrigger className="px-2">CASUAL</AccordionTrigger>
        <AccordionContent className="bg-stone-600 text-stone-300">
          <div>
            <div className="flex gap-1 justify-start items-center py-6 ml-5">
              <Checkbox id="allPick" />
              <Label htmlFor="allPick">ESCOLHA LIVRE</Label>
            </div>
            <div className="flex gap-1 justify-start items-center py-6 ml-5">
              <Checkbox id="turbo" />
              <Label htmlFor="turbo">TURBO</Label>
            </div>

            <Accordion
              type="single"
              collapsible
              className=" flex flex-col bg-stone-700 text-stone-500 w-full"
            >
              <AccordionItem value="casual-mode" className="border-none">
                <AccordionTrigger className="pl-2">
                  EXIBIR TODOS OS MODOS
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1 px-2">
                    <div className="flex gap-1 justify-start items-center">
                      <Checkbox id="individualSelection" />
                      <Label htmlFor="individualSelection">
                        SELEÇÃO INDIVIDUAL
                      </Label>
                    </div>
                    <div className="flex gap-1 justify-start items-center">
                      <Checkbox id="randomSelection" />
                      <Label htmlFor="randomSelection">SELEÇÃO ALEATÓRIA</Label>
                    </div>
                    <div className="flex gap-1 justify-start items-center">
                      <Checkbox id="skillSelection" />
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
