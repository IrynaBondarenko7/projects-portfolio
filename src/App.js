import { Container } from "./components/Container/Container";
import {
  StyledProjectsTitle,
  StyledProjectsWrap,
  StyledTitle,
} from "./components/Container/Container.styled";
import { ProjectsList } from "./components/ProjectsList/ProjectsList";
import { StyledProjectsListWrap } from "./components/ProjectsList/ProjectsList.styled";
import { individualProjects, teamProjects } from "./constants";

function App() {
  return (
    <Container>
      <StyledTitle>Projects Experience</StyledTitle>
      <StyledProjectsWrap>
        <StyledProjectsListWrap>
          <StyledProjectsTitle>Team Projects</StyledProjectsTitle>
          <ProjectsList projects={teamProjects} />
        </StyledProjectsListWrap>
        <StyledProjectsListWrap>
          <StyledProjectsTitle>Individual Projects</StyledProjectsTitle>
          <ProjectsList projects={individualProjects} />
        </StyledProjectsListWrap>
      </StyledProjectsWrap>
    </Container>
  );
}

export default App;
