import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";
import "./Contacts.style.scss";
import Link from "next/link";

interface ContactsProps {
  github: string;
  linkedin: string;
  email: string;
}

export const Contacts = ({
  github,
  linkedin,
  email,
}: ContactsProps): React.ReactElement<ContactsProps> => (
  <div className="contacts">
    <Link href={github} target="_blank">
      <BsGithub />
    </Link>
    <Link href={linkedin} target="_blank">
      <BsLinkedin />
    </Link>
    <Link href={email} target="_blank">
      <BsEnvelopeFill />
    </Link>
  </div>
);
