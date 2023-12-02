import {
  StyledDescriptionBtn,
  StyledGitHubLink,
  StyledListItem,
  StyledLivePageLink,
  StyledProjectsList,
} from "./ProjectsList.styled";
import { IoLogoGithub } from "react-icons/io";
import { PiListMagnifyingGlassDuotone } from "react-icons/pi";

export const ProjectsList = ({ projects }) => {
  return (
    <StyledProjectsList>
      {projects.map((project) => {
        return (
          <StyledListItem key={project.id}>
            <StyledGitHubLink
              href={project.gihhubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub size="34" />
            </StyledGitHubLink>
            <StyledLivePageLink
              href={project.livePageLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </StyledLivePageLink>
            <StyledDescriptionBtn type="button">
              <PiListMagnifyingGlassDuotone size="34" />
            </StyledDescriptionBtn>
          </StyledListItem>
        );
      })}
    </StyledProjectsList>
  );
};
