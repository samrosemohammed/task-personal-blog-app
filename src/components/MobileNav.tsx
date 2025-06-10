import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ToggleTheme } from "./ToggleTheme";

export const MobileNav = () => {
  return (
    <div className="md:hidden flex items-center justify-between gap-4">
      <ToggleTheme />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Menu className="size-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2" align="end">
          <DropdownMenuItem>Home</DropdownMenuItem>
          <DropdownMenuItem>Contact</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
