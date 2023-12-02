import { Container } from "./components/Container/Container";
import {
  StyledProjectsWrap,
  StyledTitle,
} from "./components/Container/Container.styled";
import { ProjectsList } from "./components/ProjectsList/ProjectsList";
import { individualProjects, teamProjects } from "./constants";

function App() {
  return (
    <Container>
      <StyledTitle>Projects Experience</StyledTitle>
      <StyledProjectsWrap>
        <ProjectsList projects={teamProjects} />
        <ProjectsList projects={individualProjects} />
      </StyledProjectsWrap>
    </Container>
  );
}

export default App;
