import { NavItem } from "@/types";
import { Navbar } from "./Navbar";
import "./Header.style.scss";

interface HeaderProps {
  navItems: Array<NavItem>;
}

export const Header = ({
  navItems,
}: HeaderProps): React.ReactElement<HeaderProps> => (
  <div className="header">
    <div className="header__title">Alan Reis</div>
    <Navbar navItems={navItems} />
  </div>
);
