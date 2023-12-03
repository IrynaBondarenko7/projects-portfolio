import { individualProjects, teamProjects } from "../../constants";
import { StyledFilterWrap, StyledSelect } from "./Filter.styled";

export const Filter = ({ handleFilter }) => {
  const allTechnologies = [...teamProjects, ...individualProjects];

  //get Technologies without repetitions
  const arrTechnologies = allTechnologies.map((el) => el.technologies);
  const technologies = [].concat(...arrTechnologies);
  const uniqueTechnologies = [...new Set(technologies)];

  let technologiesOptions = uniqueTechnologies.map((technology) => ({
    value: technology,
    label: technology,
  }));

  return (
    <StyledFilterWrap>
      <StyledSelect
        options={technologiesOptions}
        placeholder="Search by technology"
        onChange={(option) => {
          handleFilter(option.value);
        }}
      />
    </StyledFilterWrap>
  );
};
