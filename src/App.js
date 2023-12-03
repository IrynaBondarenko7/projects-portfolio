import { useState } from "react";
import { Container } from "./components/Container/Container";
import {
  StyledProjectsTitle,
  StyledProjectsWrap,
  StyledTitle,
} from "./components/Container/Container.styled";
import { Filter } from "./components/Filter/Filter";
import { ProjectsList } from "./components/ProjectsList/ProjectsList";
import { StyledProjectsListWrap } from "./components/ProjectsList/ProjectsList.styled";
import { individualProjects, teamProjects } from "./constants";

function App() {
  const [filter, setFilter] = useState("");

  const handleFilter = (value) => {
    setFilter(value);
  };

  return (
    <Container>
      <StyledTitle>Projects Experience</StyledTitle>
      <Filter handleFilter={handleFilter} />
      <StyledProjectsWrap>
        <StyledProjectsListWrap>
          <StyledProjectsTitle>Team Projects</StyledProjectsTitle>
          <ProjectsList projects={teamProjects} filter={filter} />
        </StyledProjectsListWrap>
        <StyledProjectsListWrap>
          <StyledProjectsTitle>Individual Projects</StyledProjectsTitle>
          <ProjectsList projects={individualProjects} filter={filter} />
        </StyledProjectsListWrap>
      </StyledProjectsWrap>
    </Container>
  );
}

export default App;
