import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export interface IUserRole {
  id: string;
  label: string;
}

interface DynamicRolesProps {
  roles: IUserRole[];
  handleToggleRole: (GameRole: IUserRole) => void;
  checkIsRoleChecked: (role: IUserRole) => boolean;
}

const CompetitiveRoles = ({
  roles,
  handleToggleRole,
  checkIsRoleChecked,
}: DynamicRolesProps) => {
  return (
    <>
      {roles.map((role) => (
        <div key={role.id} className="flex gap-1 pb-2">
          <Checkbox
            id={role.id}
            className="bg-black border-2 border-slate-400"
            onCheckedChange={() => handleToggleRole(role)}
            checked={checkIsRoleChecked(role)}
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
