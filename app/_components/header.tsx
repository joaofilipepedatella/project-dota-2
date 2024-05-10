import { Separator } from "@/components/ui/separator";
import {
  ArrowBigLeftIcon,
  ArrowBigRightIcon,
  CirclePowerIcon,
  CogIcon,
  MailIcon,
  ShieldIcon,
  ShieldPlusIcon,
  SwordIcon,
} from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex w-full justify-between h-24 bg-stone-800 gap-5">
      <div className="flex w-1/3 gap-5 ml-[100px]">
        <div className="flex justify-center items-center">
          <CogIcon className="text-stone-500" size={30} />
        </div>
        <Separator orientation="vertical" />
        <div className="flex space-x-5 items-center justify-center text-bold">
          <ArrowBigLeftIcon className="fill-black" size={30} />
          <ArrowBigRightIcon className="fill-black" size={30} />
        </div>
        <div className="flex justify-center border-4 border-orange-500 h-full w-[250px]">
          <Image src="/logo.svg" alt="Dota 2 symbol" width={80} height={100} />
        </div>
      </div>
      <div className="flex w-1/3">
        <div className="flex px-6 w-1/3 justify-center items-center gap-6 text-stone-500 text-center text-bold text-xl">
          <div className="flex-1">
            <p>HERÓIS</p>
          </div>
          <Separator
            orientation="vertical"
            className="bg-black w-1 rotate-12"
          />
          <div className="flex-1">
            <p>ARSENAL</p>
          </div>
          <Separator
            orientation="vertical"
            className="bg-black w-1 rotate-12"
          />
          <div className="flex-1">
            <p>ASSISTIR</p>
          </div>
          <Separator
            orientation="vertical"
            className="bg-black w-1 rotate-12"
          />
          <div className="flex-1">
            <p>APRENDER</p>
          </div>
          <Separator
            orientation="vertical"
            className="bg-black w-1 rotate-12"
          />
          <div className="flex-1">
            <p>SALÃO DE JOGOS</p>
          </div>
          <Separator
            orientation="vertical"
            className="bg-black w-1 rotate-12"
          />
        </div>
      </div>
      <div className="flex w-1/4 h-full gap-5">
        <div className="flex justify-between items-center gap-3 w-full h-full">
          <div className="flex gap-2 text-yellow-600 p-6">
            <div>
              <p>img</p>
            </div>
            <div className="gap-1 text-xl text-yellow-400">
              <p>2.905</p>
              <div className="flex gap-1">
                <div className="bg-yellow-600 rounded-full w-3 h-3"></div>
                <div className="bg-yellow-600 rounded-full w-3 h-3"></div>
                <div className="bg-yellow-600 rounded-full w-3 h-3"></div>
              </div>
            </div>
          </div>
          <Separator
            orientation="vertical"
            className="bg-black w-1 rotate-12"
          />
          <div className="flex w-full text-black justify-center items-center">
            <MailIcon className="fill-stone-500" size="40px" />
          </div>
          <Separator
            orientation="vertical"
            className="bg-black w-1 rotate-12"
          />
          <div className="flex w-full justify-center items-center">
            <ShieldIcon className="fill-stone-500" size="40px" />
            <SwordIcon className="fill-stone-500" size="40px" />
          </div>
          <Separator
            orientation="vertical"
            className="bg-black w-1 rotate-12"
          />
          <div className="flex w-full h-full justify-center items-center text-yellow-400">
            <ShieldPlusIcon className="fill-black" size="40px" />
          </div>
          <Separator
            orientation="vertical"
            className="bg-black w-1 rotate-12"
          />
          <div className="flex w-full h-full justify-center items-center">
            <CirclePowerIcon className="fill-red-800" size="40px" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
