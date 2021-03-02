import styled from "styled-components";

export const SkillsTitle = styled.h1`
  margin-top: 30px;
  margin-left: 5.2%;
  margin-bottom: 10px;
  text-align: left;
  color: #01bf71;
  font-size: 26px;
  line-height: 16px;
  font-weight: 900;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

export const SkillsContainer = styled.div`
  text-align: center;
  margin: 50px 10px;
  display: flex;
  height: 400px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 70px;

  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;

  @media screen and (max-width: 768px) {
    height: 1050px;
    margin: -39% 2px;
  }

  @media screen and (max-width: 480px) {
    height: 1100px;
    flex-direction: column;
    margin-top: 20px;
    padding: 20px;
  }
`;

export const AboutSkills = styled.p`
  color: #000;
  position: absolute;
  text-align: left;
  margin-top: -25%;
  margin-left: -50%;
  max-width: 600px;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: -20px;
`;

export const ProgrammingSkillsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  padding: 20px;
  padding-left: 0;
  grid-gap: 30px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 2fr 2fr 2fr;
    padding: 30px 10px;
  }
`;

export const SkillsIcon = styled.img`
  @media screen and (max-width: 768px) {
    height: 300px;
    width: 300px;
  }

  @media screen and (max-width: 480px) {
    height: 200px;
    width: 200px;
    margin-top: -130%;
  }
`;

export const ProgrammingSkills = styled.div`
  width: 130px;
  height: 130px;
  position: relative;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  border-radius: 5%;
  flex-direction: column;
  justify-content: center;
  max-height: 120px;

  @media screen and (max-width: 768px) {
    height: 90px;
    width: 90px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const ProgrammingSkillsH5 = styled.h5`
  font-size: 1.3rem;
  margin-top: 12px;
  text-align: center;
  font-weight: 900;
  color: #647382;
  font-family: "Nunito Sans", sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ProgrammingSkillsColor = styled.div`
  /* width: 122%;
  margin-left: -9%;
  margin-top: 7%;
  height: 90px;
  background-color: whitesmoke;
  border-radius: 100px 0 50%/100px 0; */
`;

export const ProgrammingSkillsLogo = styled.img`
  @media screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;
