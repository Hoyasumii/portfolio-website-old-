import "./Card.style.scss";
import Link from "next/link";
import slugify from "slugify";
import { BeautyImage } from "./BeautyImage";
import { Div } from "@/components";
import { Project } from "@/types";

interface CardProps extends Omit<Project, "date"> {
  date: string;
}

export const Card = ({
  date,
  description,
  href,
  imgSrc,
  title,
}: CardProps): React.ReactElement<CardProps> => {
  const Component = href ? Link : Div;

  return (
    <Component className="card" href={href ?? ""} target="_blank">
      <BeautyImage className="card__cover" src={imgSrc} alt={slugify(title)} />
      <div className="card__content">
        <div className="card__content__title">{title}</div>
        <div className="card__content__description">{description}</div>
        <div className="card__content__date">{date}</div>
      </div>
    </Component>
  );
};
