import { Button } from "@/components/ui/button";
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
    <>
      <header className="flex relative top-0 left-0 z-10 w-full justify-between h-16 bg-stone-800 gap-5">
        <div className="flex justify-center items-center h-full">
          <div className="flex justify-center items-center">
            <Button variant="ghost" className="hover:bg-transparent">
              <CogIcon className="text-stone-500" size={30} />
            </Button>
          </div>
          <div className="flex py-4 items-center justify-center h-full">
            <Separator
              orientation="vertical"
              className="bg-black shadow-sm shadow-stone-300"
            />
          </div>
          <div className="flex items-center justify-center text-bold">
            <Button
              size={"icon"}
              variant={"ghost"}
              className="hover:bg-transparent"
            >
              <ArrowBigLeftIcon className="fill-black" size={30} />
            </Button>
            <Button
              size={"icon"}
              variant={"ghost"}
              className="hover:bg-transparent"
            >
              <ArrowBigRightIcon className="fill-black" size={30} />
            </Button>
          </div>

          <div className="flex justify-center border-4 border-orange-500 h-full w-[200px]">
            <Button
              variant={"ghost"}
              className="px-8 hover:bg-transparent h-full"
            >
              <Image
                src="/dota-2-logo.png"
                alt="Dota 2 symbol"
                width={100}
                height={100}
              />
            </Button>
          </div>

          <div className="flex h-full justify-center items-center">
            <div className="flex h-full items-center border-r-2 border-black">
              <Button
                variant={"ghost"}
                className="px-8 hover:bg-transparent h-full"
              >
                <p className="text-stone-500 text-center font-semibold text-lg">
                  HERÓIS
                </p>
              </Button>
            </div>
            <div className="flex h-full items-center border-r-2 border-black">
              <Button
                variant={"ghost"}
                className="px-8 hover:bg-transparent h-full"
              >
                <p className="text-stone-500 text-center font-semibold text-lg">
                  ARSENAL
                </p>
              </Button>
            </div>
            <div className="flex h-full items-center border-r-2 border-black">
              <Button
                variant={"ghost"}
                className="px-8 hover:bg-transparent h-full"
              >
                <p className="text-stone-500 text-center font-semibold text-lg">
                  ASSISTIR
                </p>
              </Button>
            </div>
            <div className="flex h-full items-center border-r-2 border-black">
              <Button
                variant={"ghost"}
                className="px-8 hover:bg-transparent h-full"
              >
                <p className="text-stone-500 text-center font-semibold text-lg">
                  APRENDER
                </p>
              </Button>
            </div>
            <div className="flex h-full items-center border-r-2 border-black">
              <Button
                variant={"ghost"}
                className="px-8 hover:bg-transparent h-full max-w-44"
              >
                <p className="text-stone-500 text-center font-semibold text-lg text-wrap">
                  SALÃO DE JOGOS
                </p>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="flex h-full justify-center items-center border-r-2 border-black text-yellow-600 p-6">
            <Button
              variant={"ghost"}
              className="hover:bg-transparent hover:text-yellow-300 h-16 w-full gap-2"
            >
              <div>
                <p>img</p>
              </div>
              <div className="gap-1 text-xl">
                <p>2.905</p>
                <div className="flex gap-1">
                  <div className="bg-yellow-600 rounded-full w-3 h-3"></div>
                  <div className="bg-yellow-600 rounded-full w-3 h-3"></div>
                  <div className="bg-yellow-600 rounded-full w-3 h-3"></div>
                </div>
              </div>
            </Button>
          </div>
          <div className="flex h-full justify-center items-center w-20 border-r-2 border-black">
            <Button variant={"ghost"} className="hover:bg-transparent">
              <MailIcon className="fill-stone-500" size="40px" />
            </Button>
          </div>
          <div className="flex h-full justify-center items-center w-20 border-r-2 border-black">
            <Button variant={"ghost"} className="hover:bg-transparent p-2">
              <ShieldIcon className="fill-stone-500" size="40px" />
              <SwordIcon className="fill-stone-500" size="40px" />
            </Button>
          </div>
          <div className="flex h-full justify-center items-center text-yellow-400 bg-yellow-950 w-20 border-r-2 border-black">
            <Button
              variant={"ghost"}
              className="hover:bg-transparent hover:text-inherit"
            >
              <ShieldPlusIcon className="fill-black" size="40px" />
            </Button>
          </div>
          <div className="flex h-full justify-center items-center bg-red-950 w-[75px]">
            <Button
              variant={"ghost"}
              className="hover:bg-transparent hover:text-inherit"
            >
              <CirclePowerIcon className="fill-red-500" size="40px" />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
