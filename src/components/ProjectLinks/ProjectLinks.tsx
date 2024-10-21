import { GitButton } from "../GitButton/GitButton";
import { LinkButton } from "../LinkButton/LinkButton";

type Status = "completed" | "in progress" | "planning";

export const ProjectLinks = ({
  repoLink,
  deployedLink,
  status,
}: {
  repoLink: string;
  deployedLink: string;
  status: Status;
}) => {
  const statusIcons: Record<Status, string> = {
    completed: "✅",
    "in progress": "🚧",
    planning: "📝",
  };

  return (
    <article className="project-links">
      <p className="project-status">
        {status[0].toLocaleUpperCase() +
          status.slice(1, status.length) +
          " " +
          statusIcons[status]}
      </p>
      <LinkButton
        link={deployedLink || ""}
        disabled={deployedLink ? false : true}
      />
      <GitButton repoLink={repoLink || ""} disabled={repoLink ? false : true} />
    </article>
  );
};
