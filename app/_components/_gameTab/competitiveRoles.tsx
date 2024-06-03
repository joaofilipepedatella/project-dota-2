import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export interface IUserRole {
  id: string;
  label: string;
}

interface DynamicRolesProps {
  roles: IUserRole[];
  handleToggleRole: (GameRole: IUserRole) => void;
  checkIsChecked: (role: IUserRole) => boolean;
}

const CompetitiveRoles = ({
  roles,
  handleToggleRole,
  checkIsChecked,
}: DynamicRolesProps) => {
  return (
    <>
      {roles.map((role) => (
        <div key={role.id} className="flex gap-1 pb-2">
          <Checkbox
            id={role.id}
            className="bg-black border-2 border-slate-400"
            onCheckedChange={() => handleToggleRole(role)}
            checked={checkIsChecked(role)}
          />
          <Label htmlFor={role.id}>
            <span>{role.label}</span>
          </Label>
        </div>
      ))}
    </>
  );
};

export default CompetitiveRoles;
