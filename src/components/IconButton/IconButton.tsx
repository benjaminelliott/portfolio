export const IconButton = ({
  children,
  text,
  disabled,
}: {
  children: React.ReactNode;
  text: string;
  disabled?: boolean;
}) => (
  <button
    className={`icon-button ${disabled ? "icon-button-disabled" : ""}`}
    type="button"
    disabled={disabled}
  >
    {children}
    <p>{text}</p>
  </button>
);
