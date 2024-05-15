import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import FindGame from "./findGame";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { InfoIcon, PlusIcon, SearchIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const GameTab = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <FindGame />
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-between bg-black">
          <div>
            <Image
              src="/dota-2-bg.jpg"
              alt="dota 2 background"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col justify-items-end">
            <Accordion
              type="single"
              collapsible
              className=" flex flex-col text-stone-500 gap-3"
            >
              <AccordionItem
                value="item-1"
                className="bg-stone-800 border-none"
              >
                <AccordionTrigger className="px-2">
                  COPA DE BATALHAS
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-stone-800 border-none"
              >
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

              <AccordionItem
                value="item-3"
                className="bg-stone-800 border-none"
              >
                <AccordionTrigger className="px-2">
                  JOGAR CONTRA BOTS
                </AccordionTrigger>
                <AccordionContent className="bg-stone-600 text-stone-300 flex flex-col items-center justify-center">
                  {/* MODO DE JOGO */}
                  <div className="flex justify-start items-center w-full border-b">
                    <RadioGroup
                      defaultValue="cooperative"
                      className="flex gap-10 p-4"
                    >
                      <div className="flex gap-1">
                        <RadioGroupItem
                          value="cooperative"
                          id="cooperative"
                          className="bg-black"
                        />
                        <Label htmlFor="cooperative">COOPERATIVO</Label>
                      </div>
                      <div className="flex gap-1">
                        <RadioGroupItem
                          value="solo"
                          id="solo"
                          className="bg-black"
                        />
                        <Label htmlFor="solo">SOLO</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  {/* SCRIPTS */}
                  <div className="w-full border-b p-2">
                    <div className="flex justify-between items-center w-full">
                      <h5>SCRIPTS DE BOTS</h5>
                      <Link
                        href="https://steamcommunity.com/app/570/workshop/"
                        className="border-b border-stone-300 text-xs"
                      >
                        Ver na oficina
                      </Link>
                    </div>
                    <div className="w-full p-2">
                      <Select>
                        <SelectTrigger className="w-full bg-black">
                          <SelectValue placeholder="Selecione o Script" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="padrao">Bots Padrão</SelectItem>
                          <SelectItem value="oficina">Bots Oficina</SelectItem>
                          <SelectItem value="d2school">
                            Bots Dota2School
                          </SelectItem>
                          <SelectItem value="liquid">Bots Liquid</SelectItem>
                          <SelectItem value="secret">Bots Secret</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  {/* DIFICULDADE / EQUIPE */}
                  <div className="w-full flex ">
                    <div className="flex flex-col w-1/2 p-2">
                      <h5>DIFICULDADE</h5>
                      <form className="gap-1 p-1">
                        <RadioGroup defaultValue="easy" className="gap-1 p-1">
                          <div className="flex gap-1">
                            <RadioGroupItem
                              value="easy"
                              id="easy"
                              className="bg-black"
                            />
                            <Label htmlFor="easy">FÁCIL</Label>
                          </div>
                          <div className="flex gap-1">
                            <RadioGroupItem
                              value="medium"
                              id="medium"
                              className="bg-black"
                            />
                            <Label htmlFor="medium">MÉDIO</Label>
                          </div>
                          <div className="flex gap-1">
                            <RadioGroupItem
                              value="hard"
                              id="hard"
                              className="bg-black"
                            />
                            <Label htmlFor="hard">DIFÍCIL</Label>
                          </div>
                          <div className="flex gap-1">
                            <RadioGroupItem
                              value="unfair"
                              id="unfair"
                              className="bg-black"
                            />
                            <Label htmlFor="unfair">INJUSTO</Label>
                          </div>
                        </RadioGroup>
                      </form>
                    </div>
                    <div className="flex flex-col w-1/2 p-2">
                      <h5>EQUIPE</h5>
                      <form className="gap-1 p-1">
                        <RadioGroup
                          defaultValue="radiant"
                          className="gap-1 p-1"
                        >
                          <div className="flex gap-1">
                            <RadioGroupItem
                              value="radiant"
                              id="radiant"
                              className="bg-black"
                            />
                            <Label htmlFor="radiant">ILUMINADOS</Label>
                          </div>
                          <div className="flex gap-1">
                            <RadioGroupItem
                              value="dire"
                              id="dire"
                              className="bg-black"
                            />
                            <Label htmlFor="dire">TEMIDOS</Label>
                          </div>
                          <div className="flex gap-1">
                            <RadioGroupItem
                              value="random"
                              id="random"
                              className="bg-black"
                            />
                            <Label htmlFor="random">ALEATÓRIA</Label>
                          </div>
                        </RadioGroup>
                      </form>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-stone-800 border-none"
              >
                <AccordionTrigger className="px-2">
                  COMPETITIVA
                </AccordionTrigger>
                <AccordionContent className="bg-stone-600 text-stone-300 flex flex-col items-center justify-center">
                  <div className="flex justify-start items-center w-full border-b">
                    <RadioGroup
                      defaultValue="function"
                      className="flex gap-5 p-4"
                    >
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
                        <StarIcon
                          size={15}
                          className="text-slate-800 fill-slate-800"
                        />
                        <StarIcon
                          size={15}
                          className="text-slate-800 fill-slate-800"
                        />
                        <StarIcon
                          size={15}
                          className="text-slate-800 fill-slate-800"
                        />
                        <StarIcon
                          size={15}
                          className="text-slate-800 fill-slate-800"
                        />
                        <StarIcon
                          size={15}
                          className="text-slate-800 fill-slate-800"
                        />
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
                      <InfoIcon
                        size={15}
                        className="text-stone-600 fill-stone-300"
                      />
                    </div>
                    <p className="text-xs text-stone-400">
                      Você receberá 4 partidas com função (metade caso perca).
                    </p>

                    <div className="flex flex-col gap-1 w-full justify-center">
                      <div className="flex gap-1">
                        <Checkbox id="sup5" />
                        <Label htmlFor="sup5">
                          <span>Suporte dedicado</span>
                          <StarIcon
                            size={10}
                            className="text-slate-200 fill-slate-200 inline mx-1"
                          />
                        </Label>
                      </div>
                      <div className="flex gap-1 border-b pb-2">
                        <Checkbox id="sup4" />
                        <Label htmlFor="sup4">
                          <span>Suporte</span>
                          <StarIcon
                            size={10}
                            className="text-slate-200 fill-slate-200 inline mx-1"
                          />
                        </Label>
                      </div>
                      <div className="flex gap-1 pt-2">
                        <Checkbox id="offlane" />
                        <Label htmlFor="offlane">
                          <span>Trilha vulnerável</span>
                        </Label>
                      </div>
                      <div className="flex gap-1">
                        <Checkbox id="mid" />
                        <Label htmlFor="mid">
                          <span>Trilha do meio</span>
                        </Label>
                      </div>
                      <div className="flex gap-1">
                        <Checkbox id="hc" />
                        <Label htmlFor="hc">
                          <span>Trilha segura</span>
                        </Label>
                      </div>
                    </div>
                  </div>
                  <Accordion
                    type="single"
                    collapsible
                    className="bg-stone-700 w-full"
                  >
                    <AccordionItem
                      value="competitive-mode"
                      className="border-none"
                    >
                      <AccordionTrigger className="px-2">
                        SELEC. MODO DE JOGO
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-1 px-2">
                        <div className="flex gap-1">
                          <Checkbox id="freePickComp" />
                          <Label htmlFor="freePickComp">
                            <span>ESCOLHA LIVRE COMPETITIVO</span>
                          </Label>
                        </div>
                        <div className="flex gap-1">
                          <Checkbox id="randomPickComp" />
                          <Label htmlFor="randomPickComp">
                            <span>SELEÇÃO ALEATÓRIA</span>
                          </Label>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-stone-800 border-none"
              >
                <AccordionTrigger className="px-2">CASUAL</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="bg-stone-800 border-none"
              >
                <AccordionTrigger className="px-2">
                  MODO PARA NOVATOS
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default GameTab;
