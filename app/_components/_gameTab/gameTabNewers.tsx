import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const JogarModoNovato = () => {
  return (
    <>
      <AccordionItem value="item-6" className="bg-stone-800 border-none">
        <AccordionTrigger className="px-2">MODO PARA NOVATOS</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col px-4 pt-1 gap-3">
            <p>Um modo de jogo simplificado, ideal para novatos.</p>
            <div className="w-[75%]">
              <span>Como Funciona:</span>
              <ul className="list-disc list-inside">
                <li>Jogabilidade mais descontraída</li>
                <li>Partida com outros novatos</li>
                <li>Seleção limitada de heróis</li>
                <li>Criação de partidas mais rápidas</li>
                <li>Sem penalidades por abandono</li>
              </ul>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default JogarModoNovato;
