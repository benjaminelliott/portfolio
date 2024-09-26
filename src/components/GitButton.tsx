import { FolderGit } from "lucide-react";
import { IconButton } from "./IconButton";
import { Link } from "react-router-dom";

export const GitButton = ({
  repoLink,
  disabled,
}: {
  repoLink: string;
  disabled: boolean;
}) => (
  <Link
    to={repoLink}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    <IconButton text="Repo" disabled={disabled}>
      <FolderGit size={24} />
    </IconButton>
  </Link>
);
