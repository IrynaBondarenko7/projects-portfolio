import { ProjectsListItem } from "./ProjectsListItem";

export const ProjectsList = ({ projects, filter }) => {
  let filteredProjects;
  if (filter !== "") {
    filteredProjects = projects.filter((project) =>
      project.technologies.includes(filter)
    );
  } else {
    filteredProjects = projects;
  }

  return (
    <ul>
      {filteredProjects.map((project) => {
        return <ProjectsListItem key={project.id} project={project} />;
      })}
    </ul>
  );
};
