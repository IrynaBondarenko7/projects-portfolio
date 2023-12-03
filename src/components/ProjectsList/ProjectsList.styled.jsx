import styled from "styled-components";

export const StyledProjectsListWrap = styled.div`
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const StyledLinksWrap = styled.div`
  display: flex;
  align-items: center;
  background-color: #5d6d7e;
  border-radius: 15px;
  margin: 0 15px 15px 15px;
  height: 55px;
  gap: 5px;
  box-shadow: 6px 6px 6px 2px rgba(160, 159, 159, 0.3);
`;

export const StyledGitHubLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-left: 10px;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  height: 40px;
`;

export const StyledLivePageLink = styled.a`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 40px;
  text-align: center;
  color: #5d6d7e;
  font-size: 20px;
  font-weight: 600;
`;

export const StyledDescriptionBtn = styled.button`
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  margin-right: 10px;
  height: 40px;
  color: #212121;
`;

export const StyledDescriptionWrap = styled.div`
  background-color: #5d6d7e;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledDescriptionTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  background-color: #fff;
  color: #5d6d7e;
  text-align: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 3px;
`;

export const StyledDescription = styled.p`
  font-size: 18px;
  background-color: #fff;
  color: #5d6d7e;
  padding: 5px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const StyledTechnologiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const StyledTechnologyItem = styled.li`
  font-size: 18px;
  background-color: #fff;
  color: #5d6d7e;
  padding: 4px;
  border-radius: 10px;
`;
