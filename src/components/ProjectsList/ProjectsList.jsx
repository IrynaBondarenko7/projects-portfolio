import { ProjectsListItem } from "./ProjectsListItem";

export const ProjectsList = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => {
        return <ProjectsListItem project={project} />;
      })}
    </ul>
  );
};
