import styled from "styled-components";

export const ServicesContainer = styled.div`
  padding-top: 20px;
  height: auto;
  display: flex;
  margin-bottom: 15px;
  padding-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  border-top-left-radius: 20%;
  border-top-right-radius: 0%;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1600px;
    margin-top: -110%;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  align-items: center;
  grid-gap: 16px;
  padding: 10px 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 2fr 2fr 2fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 2fr 2fr;
    max-width: 30%;
    margin-left: -5%;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 260px;
  width: 440px;
  padding: 10px;
  padding-top: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    height: 330px;
    width: 380px;
  }

  @media screen and (max-width: 768px) {
    height: 360px;
    width: 175px;
    padding: 2px;
  }
`;

export const Lang = styled.div`
  display: flex;
`;
export const LangContaner = styled.div`
  padding: 5px;
`;
export const LangUsed = styled.div`
  font-size: 14px;
  padding: 3px;
  border-radius: 17%;
  background-color: #39ac6b;
  color: #dcdcdc;
  font-family: "Source Code Pro", monospace;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    padding: 1px;
    font-size: 12px;
  }
`;

export const ServicesIcon = styled.div`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.3rem;
  color: #01bf71;
  padding-bottom: 2px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 3px;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ServicesP = styled.p`
  font-size: 16px;
  padding-top: 10px;
  font-family: "Source Code Pro", monospace;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;
