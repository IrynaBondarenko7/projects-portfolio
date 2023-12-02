import styled from "styled-components";

export const StyledProjectsList = styled.ul`
  flex: 1;
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #5d6d7e;
  border-radius: 15px;
  margin: 0 15px 15px 15px;
  height: 55px;
  gap: 5px;
`;

export const StyledGitHubLink = styled.a`
  background-color: #fff;
  margin-left: 10px;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  height: 40px;
`;

export const StyledLivePageLink = styled.a`
  flex: 2;
  background-color: #fff;
  height: 40px;
  text-align: center;
  color: #5d6d7e;
`;

export const StyledDescriptionBtn = styled.button`
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  margin-right: 10px;
  height: 40px;
`;
