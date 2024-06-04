import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export interface IGameMode {
  id: string;
  label: string;
}

interface DynamicGameModesProps {
  modes: IGameMode[];
  handleToggleMode: (GameMode: IGameMode) => void;
}

const CompGameModes = ({ modes }: DynamicGameModesProps) => {
  return (
    <>
      {modes.map((mode) => (
        <div key={mode.id} className="flex gap-1 pb-2">
          <Checkbox
            id={mode.id}
            className="bg-black border-2 border-slate-400"
          />
          <Label htmlFor={mode.id}>
            <span>{mode.label}</span>
          </Label>
        </div>
      ))}
    </>
  );
};

export default CompGameModes;
