import styled from "styled-components";
import girlImg from "../../images/girl.jfif";

export const StyledContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${girlImg});

  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (min-width: 320px) {
    width: 400px;
    height: 400px;
  }
  @media screen and (min-width: 1024px) {
    width: 1200px;
    height: 1200px;
  }
`;

export const StyledTitle = styled.h1`
  color: white;
  text-transform: uppercase;
  mix-blend-mode: overlay;
  text-align: center;
  padding-top: 70px;
  @media screen and (min-width: 360px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 90px;
  }
`;

export const StyledProjectsWrap = styled.div`
  display: flex;
  margin-top: 50px;
  @media screen and (min-width: 320px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const StyledProjectsTitle = styled.p`
  font-size: 25px;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
`;
