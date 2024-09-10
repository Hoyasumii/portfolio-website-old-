import Image from "next/image";
import "./BeautyImage.style.scss";

interface BeautyImageProps {
  className: string;
  src: string;
  alt: string;
}

export const BeautyImage = ({
  className,
  src,
  alt,
}: BeautyImageProps): React.ReactElement<BeautyImageProps> => {
  return (
    <div className={`beauty-image ${className}`}>
      <Image className="beauty-image__background" src={src} alt={alt} width={10000} height={10000} />
      <Image className="beauty-image__content" src={src} alt={alt} width={10000} height={10000} />
    </div>
  );
};
