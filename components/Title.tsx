import "./Title.style.scss";

interface TitleProps {
  value: string;
}

export const Title = ({
  value,
}: TitleProps): React.ReactElement<TitleProps> => <h1 className="title">{value}</h1>;
