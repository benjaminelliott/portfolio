import { IconButton } from "../IconButton/IconButton";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export const LinkButton = ({
  link,
  disabled,
}: {
  link: string;
  disabled?: boolean;
}) => (
  <Link
    to={link}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    <IconButton text="Link" disabled={disabled}>
      <ExternalLink size={24} />
    </IconButton>
  </Link>
);
