import Image from "next/image";
import "./Icon.style.scss";

interface IconProps {
  src: string;
}

export const Icon = ({ src }: IconProps): React.ReactElement<IconProps> => (
  <Image
    className="icon"
    width={10000}
    height={10000}
    src={src}
    alt="Picture"
  />
);
