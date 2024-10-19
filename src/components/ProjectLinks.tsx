import { GitButton } from "./GitButton/GitButton";
import { LinkButton } from "./LinkButton/LinkButton";

export const ProjectLinks = ({
  repoLink,
  deployedLink,
}: {
  repoLink: string;
  deployedLink: string;
}) => (
  <article className="project-links">
    <LinkButton
      link={deployedLink || ""}
      disabled={deployedLink ? false : true}
    />
    <GitButton repoLink={repoLink || ""} disabled={repoLink ? false : true} />
  </article>
);
