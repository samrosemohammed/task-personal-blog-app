import { Github, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ToggleTheme } from "./ToggleTheme";
import Link from "next/link";

export const MobileNav = () => {
  return (
    <div className="md:hidden flex items-center justify-between gap-4">
      <ToggleTheme />
      <Link
        className="p-2 hover:bg-primary/10 rounded-full"
        href={"https://github.com/samrosemohammed/task-personal-blog-app"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Repository"
      >
        <Github />
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Menu className="size-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2" align="end">
          <DropdownMenuItem asChild>
            <Link href={"/"}>Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={"/contact"}>Contact</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
