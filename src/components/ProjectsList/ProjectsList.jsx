import { ProjectsListItem } from "./ProjectsListItem";

export const ProjectsList = ({ projects, filter }) => {
  let filtredProjects;
  if (filter !== "") {
    filtredProjects = projects.filter((project) =>
      project.technologies.includes(filter)
    );
  } else {
    filtredProjects = projects;
  }

  return (
    <ul>
      {filtredProjects.map((project) => {
        return <ProjectsListItem key={project.id} project={project} />;
      })}
    </ul>
  );
};
