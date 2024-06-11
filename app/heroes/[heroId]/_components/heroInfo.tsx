import {
  ChevronsRightIcon,
  ClockIcon,
  FootprintsIcon,
  GrabIcon,
  MoveHorizontalIcon,
  ShieldIcon,
  SwordIcon,
  WandSparklesIcon,
  WindIcon,
} from "lucide-react";

interface HeroInfoProps {
  hero: {
    localized_name: string;
    primary_attr: string;
    attack_type: string;
    roles: string[];
    base_str: number;
    base_agi: number;
    base_int: number;
    str_gain: number;
    agi_gain: number;
    int_gain: number;
    base_attack_min: number;
    base_attack_max: number;
    base_armor: number;
    move_speed: number;
    attack_range: number;
    attack_rate: number;
    base_attack_time: number;
    base_health: number;
    base_health_regen: number;
    base_mana: number;
    base_mana_regen: number;
    // ... outras props que você deseja receber
  };
}

const HeroInfo: React.FC<HeroInfoProps> = ({ hero }) => {
  return (
    <div className="flex mt-14 ml-14 justify-between items-center ">
      <div className="flex flex-col w-1/4">
        <div>
          <h1 className="text-white font-semibold uppercase text-5xl pb-5">
            {hero.localized_name}
          </h1>
        </div>
        <div className="text-slate-300">
          <p>
            Atributo primário:
            {hero.primary_attr === "str"
              ? "Força"
              : hero.primary_attr === "agi"
              ? "Agilidade"
              : hero.primary_attr === "int"
              ? "Inteligência"
              : "Universal"}
          </p>
          <p>Tipo de ataque: {hero.attack_type}</p>
          <p>Roles: {hero.roles.join(", ")}</p>
        </div>
        <div className="flex justify-between text-slate-100 mt-4">
          <div className="flex flex-col gap-4 border-r border-t border-b w-1/3 border-white pl-2 py-5">
            <div>
              <p className="text-sm text-slate-500">Força</p>
              <p className="flex gap-2 font-bold">
                <GrabIcon className="fill-red-900 text-red-600" />{" "}
                {hero.base_str} + {hero.str_gain}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Agilidade</p>
              <p className="flex gap-2 font-bold">
                <WindIcon className="fill-green-900 text-green-600" />{" "}
                {hero.base_agi} + {hero.agi_gain}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Inteligência</p>
              <p className="flex gap-2 font-bold">
                <WandSparklesIcon className="fill-blue-900 text-blue-600" />{" "}
                {hero.base_int} + {hero.int_gain}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center border-l border-t border-b w-2/3 border-white py-6 text-xs">
            <div className="flex justify-around w-full">
              <div className="flex flex-col justify-center items-center gap-1">
                <div>
                  <SwordIcon size={15} className="fill-slate-100" />
                </div>
                <div className="flex">
                  {hero.base_attack_min +
                    Math.floor(
                      hero.primary_attr === "str"
                        ? hero.base_str
                        : hero.primary_attr === "agi"
                        ? hero.base_agi
                        : hero.primary_attr === "int"
                        ? hero.base_int
                        : hero.primary_attr === "all"
                        ? hero.base_str * 0.7 +
                          hero.base_agi * 0.7 +
                          hero.base_int * 0.7
                        : 0
                    )}
                  -
                  {hero.base_attack_max +
                    Math.floor(
                      hero.primary_attr === "str"
                        ? hero.base_str
                        : hero.primary_attr === "agi"
                        ? hero.base_agi
                        : hero.primary_attr === "int"
                        ? hero.base_int
                        : hero.primary_attr === "all"
                        ? hero.base_str * 0.7 +
                          hero.base_agi * 0.7 +
                          hero.base_int * 0.7
                        : 0
                    )}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <div>
                  <ShieldIcon size={15} className="fill-slate-100" />
                </div>
                <div>
                  {(
                    hero.base_armor +
                    hero.base_agi * 0.16 +
                    hero.agi_gain * 0.16
                  ).toFixed(2)}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <div>
                  <FootprintsIcon size={15} className="fill-slate-100" />
                </div>
                <div>{hero.move_speed}</div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <div>
                  <ClockIcon size={15} />
                </div>
                <div>{hero.attack_rate}</div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <div>
                  <ChevronsRightIcon size={15} />
                </div>
                <div>{hero.base_attack_time + hero.base_agi}</div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <div>
                  <MoveHorizontalIcon size={15} />
                </div>
                <div>{hero.attack_range}</div>
              </div>
            </div>
            <div className="flex flex-col justify-start w-full pl-2 pt-4">
              <div>
                <h5 className="text-sm text-slate-500">Vida Maxima</h5>
                <div className="flex relative text-center items-center bg-emerald-600 p-1 m-1 mx-10 rounded">
                  <p className="text-base w-full  font-bold text-slate-100">
                    {hero.base_health + hero.base_str * 22}
                  </p>
                  <p className="absolute right-1 text-sm text-slate-100">
                    +
                    {(
                      hero.base_health_regen +
                      hero.base_str * 0.09 +
                      hero.str_gain * 0.09
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
              <div>
                <h5 className="text-sm text-slate-500">Mana Maxima</h5>
                <div className="flex relative text-center items-center bg-cyan-600 p-1 m-1 mx-10 rounded">
                  <p className="text-base w-full  font-bold text-slate-100">
                    {hero.base_mana + hero.base_int * 12}
                  </p>
                  <p className="absolute right-1 text-sm text-slate-100">
                    +
                    {(
                      hero.base_mana_regen +
                      hero.base_int * 0.05 +
                      hero.int_gain * 0.05
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
