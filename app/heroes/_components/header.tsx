import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShieldPlusIcon } from "lucide-react";

const HeaderHeroes = () => {
  return (
    <>
      <header className="flex w-full justify-center h-10 bg-stone-800/25 gap-5 tracking-wider ">
        <div className=" flex w-3/5 space-x-7 px-6 text-white items-center">
          <div>
            <Button className="bg-transparent hover:bg-transparent h-full w-full text-base">
              HERÓIS
            </Button>
          </div>
          <Separator orientation="vertical" className="h-5" />
          <div>
            <Button className="bg-transparent hover:bg-transparent h-full w-full text-base">
              GUIAS
            </Button>
          </div>
          <Separator orientation="vertical" className="h-5" />
          <div className="flex items-center">
            <Button className="bg-transparent hover:bg-transparent h-full w-full text-base gap-1">
              <ShieldPlusIcon
                className="fill-black text-yellow-500"
                size="25px"
              />
              TENDÊNCIAS
            </Button>
          </div>
        </div>
      </header>
      <div></div>
    </>
  );
};

export default HeaderHeroes;
