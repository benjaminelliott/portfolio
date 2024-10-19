export const PageTitle = ({
  text,
  strongText,
  main = false,
  icon,
}: {
  text: string;
  strongText?: string;
  main?: boolean;
  icon?: string;
}) => {
  return (
    <h2 className="title">
      <strong className="title-strong">{text}</strong>
      <span className={`${main ? "title-name" : ""}`}>
        {" " + strongText + " " + icon}
      </span>
    </h2>
  );
};
