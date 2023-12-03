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
  width: 500px;
`;
