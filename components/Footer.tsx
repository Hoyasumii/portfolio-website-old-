import Link from "next/link";
import "./Footer.style.scss";

interface FooterProps {
  name: string;
  link: string;
}

export const Footer = ({
  name,
  link,
}: FooterProps): React.ReactElement<FooterProps> => (
  <div className="footer">
    ©{new Date().getFullYear()},&nbsp;<Link className="footer__link" href={link} target="_blank">{name}</Link>
  </div>
);
