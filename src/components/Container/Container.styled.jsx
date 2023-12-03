import styled from "styled-components";
import girlImg from "../../images/girl.jfif";

export const StyledContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${girlImg});
  width: 1200px;
  height: 1200px;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const StyledTitle = styled.h1`
  font-size: 90px;
  color: white;
  text-transform: uppercase;
  mix-blend-mode: overlay;
  text-align: center;
  padding-top: 50px;
`;

export const StyledProjectsWrap = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const StyledProjectsTitle = styled.p`
  font-size: 25px;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
`;
