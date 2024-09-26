export const SubHeading = ({ text, icon }: { text: string; icon?: string }) => {
  return (
    <h4 className="sub-heading">
      {text} {icon || ""}
    </h4>
  );
};
