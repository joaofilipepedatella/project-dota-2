import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InfoIcon, StarIcon } from "lucide-react";
import Image from "next/image";

const JogarCompetitiva = () => {
  return (
    <>
      <AccordionItem value="item-4" className="bg-slate-800/80 border-none">
        <AccordionTrigger className="px-2">COMPETITIVA</AccordionTrigger>
        <AccordionContent className="bg-slate-600/80 text-stone-300 flex flex-col items-center justify-center">
          <div className="flex justify-start items-center w-full border-b">
            <RadioGroup defaultValue="function" className="flex gap-5 p-4">
              <div className="flex gap-1">
                <RadioGroupItem
                  value="function"
                  id="function"
                  className="bg-black"
                />
                <Label htmlFor="function">BUSCA POR FUNÇÕES</Label>
              </div>
              <div className="flex gap-1">
                <RadioGroupItem
                  value="classic"
                  id="classic"
                  className="bg-black"
                />
                <Label htmlFor="classic">CLÁSSICA</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex justify-between items-center w-full bg-gradient-to-r from-gray-500 to-transparent">
            <div className="flex flex-col justify-start items-center ml-3">
              <h5>NÃO CALIBRADA</h5>
              <div className="flex justify-start gap-1 w-full">
                <StarIcon size={15} className="text-slate-800 fill-slate-800" />
                <StarIcon size={15} className="text-slate-800 fill-slate-800" />
                <StarIcon size={15} className="text-slate-800 fill-slate-800" />
                <StarIcon size={15} className="text-slate-800 fill-slate-800" />
                <StarIcon size={15} className="text-slate-800 fill-slate-800" />
              </div>
            </div>
            <div className="flex items-center justify-center h-20 w-20 mr-12">
              <Image
                src="/unranked.webp"
                alt="unranked medal"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-start items-center w-full p-2">
            <div className="flex gap-1 justify-start items-center w-full">
              <h5 className="text-green-500">BUSCA COM FUNÇÃO</h5>
              <InfoIcon size={15} className="text-stone-600 fill-stone-300" />
            </div>
            <p className="text-xs text-stone-400">
              Você receberá 4 partidas com função (metade caso perca).
            </p>

            <div className="flex flex-col gap-1 w-full justify-center">
              <div className="flex gap-1">
                <Checkbox
                  id="sup5"
                  className="bg-black border-2 border-slate-400"
                />
                <Label htmlFor="sup5">
                  <span>Suporte dedicado</span>
                  <StarIcon
                    size={10}
                    className="text-slate-200 fill-slate-200 inline mx-1"
                  />
                </Label>
              </div>
              <div className="flex gap-1 border-b pb-2">
                <Checkbox
                  id="sup4"
                  className="bg-black border-2 border-slate-400"
                />
                <Label htmlFor="sup4">
                  <span>Suporte</span>
                  <StarIcon
                    size={10}
                    className="text-slate-200 fill-slate-200 inline mx-1"
                  />
                </Label>
              </div>
              <div className="flex gap-1 pt-2">
                <Checkbox
                  id="offlane"
                  className="bg-black border-2 border-slate-400"
                />
                <Label htmlFor="offlane">
                  <span>Trilha vulnerável</span>
                </Label>
              </div>
              <div className="flex gap-1">
                <Checkbox
                  id="mid"
                  className="bg-black border-2 border-slate-400"
                />
                <Label htmlFor="mid">
                  <span>Trilha do meio</span>
                </Label>
              </div>
              <div className="flex gap-1">
                <Checkbox
                  id="hc"
                  className="bg-black border-2 border-slate-400"
                />
                <Label htmlFor="hc">
                  <span>Trilha segura</span>
                </Label>
              </div>
            </div>
          </div>
          <Accordion
            type="single"
            collapsible
            className="bg-slate-800/80 w-full"
          >
            <AccordionItem value="competitive-mode" className="border-none">
              <AccordionTrigger className="pl-2">
                SELEC. MODO DE JOGO
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-1 px-2">
                <div className="flex gap-1 justify-start items-center">
                  <Checkbox
                    id="freePickComp"
                    className="bg-black border-2 border-slate-400"
                  />
                  <Label htmlFor="freePickComp">
                    <span>ESCOLHA LIVRE COMPETITIVO</span>
                  </Label>
                </div>
                <div className="flex gap-1 justify-start items-center">
                  <Checkbox
                    id="randomPickComp"
                    className="bg-black border-2 border-slate-400"
                  />
                  <Label htmlFor="randomPickComp">
                    <span>SELEÇÃO ALEATÓRIA</span>
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default JogarCompetitiva;
