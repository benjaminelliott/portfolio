export const SectionHeading = ({
  text,
  icon,
}: {
  text: string;
  icon?: string;
}) => {
  return (
    <h1 className="section-heading">
      {text} {icon || ""}
    </h1>
  );
};
