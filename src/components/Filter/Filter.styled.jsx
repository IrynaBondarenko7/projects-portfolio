import styled from "styled-components";
import Select from "react-select";

export const StyledFilterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
  margin-bottom: 100px;
`;

export const StyledSelect = styled(Select)`
  @media screen and (min-width: 360px) {
    width: 300px;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
  }
`;
