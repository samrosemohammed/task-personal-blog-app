import Link from "next/link";
import { ToggleTheme } from "./ToggleTheme";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link className="font-bold text-xl sm:text-2xl md:text-3xl" href={"/"}>
        BlogApp
      </Link>
      <ul className="flex items-center space-x-8">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>Contact</Link>
        </li>
        <li>
          <ToggleTheme />
        </li>
      </ul>
    </nav>
  );
};
