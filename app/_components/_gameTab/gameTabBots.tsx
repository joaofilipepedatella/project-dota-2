"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";

const JogarContraBots = () => {
  const [gameMode, setGameMode] = useState("cooperative");

  return (
    <>
      <AccordionItem value="item-3" className="bg-slate-800/80 border-none">
        <AccordionTrigger className="px-2">JOGAR CONTRA BOTS</AccordionTrigger>
        <AccordionContent className="bg-slate-600/80 text-stone-300 flex flex-col items-center justify-center">
          {/* MODO DE JOGO */}
          <div className="flex justify-start items-center w-full border-b">
            <RadioGroup defaultValue="cooperative" className="flex gap-10 p-4">
              <div className="flex gap-1">
                <RadioGroupItem
                  value="cooperative"
                  id="cooperative"
                  className="bg-black"
                  onClick={() => setGameMode("cooperative")}
                />
                <Label htmlFor="cooperative">COOPERATIVO</Label>
              </div>
              <div className="flex gap-1">
                <RadioGroupItem
                  value="solo"
                  id="solo"
                  className="bg-black"
                  onClick={() => setGameMode("solo")}
                />
                <Label htmlFor="solo">SOLO</Label>
              </div>
            </RadioGroup>
          </div>

          {gameMode == "solo" ? (
            <>
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
                      <SelectItem value="d2school">Bots Dota2School</SelectItem>
                      <SelectItem value="liquid">Bots Liquid</SelectItem>
                      <SelectItem value="secret">Bots Secret</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
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
                    <RadioGroup defaultValue="radiant" className="gap-1 p-1">
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
            </>
          ) : (
            <>
              <div className="w-full p-2">
                <div className="flex items-center w-full mb-2">
                  <h5>SCRIPTS DE BOTS</h5>
                </div>
                <div className="flex flex-col gap-2 w-full justify-center">
                  <div className="flex gap-1">
                    <Checkbox
                      id="original"
                      className="bg-black border-2 border-slate-400"
                    />
                    <Label htmlFor="original">
                      <span>BOTS PADRÃO</span>
                    </Label>
                  </div>
                  <div className="flex gap-1">
                    <Checkbox
                      id="rankedAI"
                      className="bg-black border-2 border-slate-400"
                    />
                    <Label htmlFor="rankedAI">
                      <span>RANKED MATCHMAKING AI</span>
                    </Label>
                  </div>
                  <div className="flex gap-1">
                    <Checkbox
                      id="expFurious"
                      className="bg-black border-2 border-slate-400"
                    />
                    <Label htmlFor="expFurious">
                      <span>BOT EXPERIMENT CREDIT:FURIOUSPUPPY</span>
                    </Label>
                  </div>
                  <div className="flex border-b pb-2 gap-1">
                    <Checkbox
                      id="chinaAI"
                      className="bg-black border-2 border-slate-400"
                    />
                    <Label htmlFor="chinaAI">
                      <span>CHINA AI</span>
                    </Label>
                  </div>
                </div>
              </div>
              <div className="w-full p-2">
                <div className="flex items-center w-full mb-2">
                  <h5>DIFICULDADE</h5>
                </div>
                <div className="flex flex-col gap-2 w-full justify-center">
                  <div className="flex gap-1">
                    <Checkbox
                      id="easy"
                      className="bg-black border-2 border-slate-400"
                    />
                    <Label htmlFor="easy">
                      <span>FÁCIL</span>
                    </Label>
                  </div>
                  <div className="flex gap-1">
                    <Checkbox
                      id="medium"
                      className="bg-black border-2 border-slate-400"
                    />
                    <Label htmlFor="medium">
                      <span>MÉDIO</span>
                    </Label>
                  </div>
                  <div className="flex gap-1">
                    <Checkbox
                      id="hard"
                      className="bg-black border-2 border-slate-400"
                    />
                    <Label htmlFor="hard">
                      <span>DIFÍCIL</span>
                    </Label>
                  </div>
                  <div className="flex gap-1">
                    <Checkbox
                      id="unfair"
                      className="bg-black border-2 border-slate-400"
                    />
                    <Label htmlFor="unfair">
                      <span>INJUSTO</span>
                    </Label>
                  </div>
                </div>
              </div>
            </>
          )}
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default JogarContraBots;
