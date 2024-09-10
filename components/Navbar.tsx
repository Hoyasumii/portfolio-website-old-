"use client";

import { NavItem } from "@/types";
import { usePathname } from 'next/navigation'
import slugify from "slugify";
import "./Navbar.style.scss";
import Link from "next/link";

interface NavbarProps {
  navItems: Array<NavItem>;
}

export const Navbar = ({
  navItems,
}: NavbarProps): React.ReactElement<NavbarProps> => {
  const pathname = usePathname();
  return (
    <div className="navbar">
      {navItems.map((navItem) => (
        <div
          key={slugify(navItem.title, {
            lower: true,
            trim: true,
          })}
          className={`navbar__item ${(pathname === navItem.href) && "active"} ${navItem.disabled && "disabled"}`}
        >
          <Link href={navItem.href}>{ navItem.title }</Link>
        </div>
      ))}
    </div>
  );
};
