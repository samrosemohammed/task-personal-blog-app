import Link from "next/link";
import { ToggleTheme } from "./ToggleTheme";
import { MobileNav } from "./MobileNav";
import { Github } from "lucide-react";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link className="font-bold text-xl sm:text-2xl md:text-3xl" href={"/"}>
        BlogApp
      </Link>
      <ul className="hidden md:flex items-center space-x-8">
        <li className="hover:underline hover:underline-offset-4 transition-all duration-300">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:underline hover:underline-offset-4 transition-all duration-300">
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <ToggleTheme />
        </li>
        <li>
          <Link
            href={"https://github.com/samrosemohammed/task-personal-blog-app"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <Github />
          </Link>
        </li>
      </ul>
      <MobileNav />
    </nav>
  );
};
