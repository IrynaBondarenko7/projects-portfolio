import { useState } from "react";
import {
  StyledDescription,
  StyledDescriptionBtn,
  StyledDescriptionTitle,
  StyledDescriptionWrap,
  StyledGitHubLink,
  StyledLinksWrap,
  StyledLivePageLink,
  StyledTechnologiesList,
  StyledTechnologyItem,
} from "./ProjectsList.styled";
import { IoLogoGithub } from "react-icons/io";
import { PiListMagnifyingGlassDuotone } from "react-icons/pi";

export const ProjectsListItem = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDescription = () => {
    setIsVisible(!isVisible);
  };
  return (
    <li>
      <StyledLinksWrap>
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
        <StyledDescriptionBtn type="button" onClick={toggleDescription}>
          <PiListMagnifyingGlassDuotone size="34" />
        </StyledDescriptionBtn>
      </StyledLinksWrap>
      {isVisible && (
        <div>
          <StyledDescriptionWrap>
            <StyledDescriptionTitle>Description</StyledDescriptionTitle>
            <StyledDescription>{project.description}</StyledDescription>
          </StyledDescriptionWrap>
          <StyledDescriptionWrap>
            <StyledDescriptionTitle>Technologies</StyledDescriptionTitle>
            <StyledTechnologiesList>
              {project.technologies.map((technology) => {
                return (
                  <StyledTechnologyItem key={technology}>
                    {technology}
                  </StyledTechnologyItem>
                );
              })}
            </StyledTechnologiesList>
          </StyledDescriptionWrap>
        </div>
      )}
    </li>
  );
};
