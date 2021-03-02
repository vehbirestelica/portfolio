import React from "react";
import {
  SkillsContainer,
  SkillsIcon,
  ProgrammingSkills,
  ProgrammingSkillsColor,
  ProgrammingSkillsH5,
  ProgrammingSkillsLogo,
  ProgrammingSkillsContainer,
  SkillsTitle,
  AboutSkills,
} from "./SkillsElements";
import myIcon from "../../images2/skills.svg";
import javaIcon from "../../SkillsImages/java1.jpg";
import htmlIcon from "../../SkillsImages/html.jpg";
import cssIcon from "../../SkillsImages/css.png";
import reactIcon from "../../SkillsImages/react.png";
import mysqlIcon from "../../SkillsImages/mysql.png";
import sqliteIcon from "../../SkillsImages/sqlite.png";
import firebaseIcon from "../../SkillsImages/firebase.png";
import gitIcon from "../../SkillsImages/git.png";
import npmIcon from "../../SkillsImages/npm.png";
import androidIcon from "../../SkillsImages/android.png";
import { Button } from "../ButtonElement";

export const Skills = (
  primary,
  dark,
  dark2,
  medium,
  mediumH,
  fontBig,
  big,
  bigMarginLeft,
  marginTop
) => {
  return (
    <div id="skills">
      <SkillsTitle>My Skills</SkillsTitle>
      <SkillsContainer>
        <AboutSkills>
          {/* I have experience building web applications and mobile applications
          using technologies such as: Java, HTML, CSS, ReactJS, MySQL &
          Firebase, Android SDK. For more you can check my apps below. */}
          {/* <Button
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            fontBig={false}
            big={big ? 0 : 1}
            bigMarginLeft={true}
            marginTop={true}
            primary={primary ? 0 : 1}
            dark={dark ? 0 : 1}
            dark2={dark2 ? 0 : 1}
            medium={true}
            mediumH={true}
          >
            Learn More
          </Button> */}
        </AboutSkills>
        <SkillsIcon
          src={myIcon}
          alt="piechart"
          height="550px"
          width="550px"
        ></SkillsIcon>
        <ProgrammingSkillsContainer>
          <ProgrammingSkills>
            <ProgrammingSkillsColor>
              <ProgrammingSkillsLogo
                src={javaIcon}
                alt="Java"
                height="70px"
                width="70px"
              ></ProgrammingSkillsLogo>
              <ProgrammingSkillsH5>Java</ProgrammingSkillsH5>
            </ProgrammingSkillsColor>
          </ProgrammingSkills>
          <ProgrammingSkills>
            <ProgrammingSkillsColor>
              <ProgrammingSkillsLogo
                src={androidIcon}
                alt="Android Studio"
                height="65px"
                width="65px"
              ></ProgrammingSkillsLogo>
              <ProgrammingSkillsH5>SDK</ProgrammingSkillsH5>
            </ProgrammingSkillsColor>
          </ProgrammingSkills>
          <ProgrammingSkills>
            <ProgrammingSkillsColor>
              <ProgrammingSkillsLogo
                src={firebaseIcon}
                alt="Firebase"
                height="60px"
                width="60px"
              ></ProgrammingSkillsLogo>
              <ProgrammingSkillsH5>Firebase</ProgrammingSkillsH5>
            </ProgrammingSkillsColor>
          </ProgrammingSkills>
          <ProgrammingSkills>
            <ProgrammingSkillsColor>
              <ProgrammingSkillsLogo
                src={reactIcon}
                alt="ReactJS"
                height="70px"
                width="85px"
              ></ProgrammingSkillsLogo>
              <ProgrammingSkillsH5>ReactJS</ProgrammingSkillsH5>
            </ProgrammingSkillsColor>
          </ProgrammingSkills>
          <ProgrammingSkills>
            <ProgrammingSkillsColor>
              <ProgrammingSkillsLogo
                src={htmlIcon}
                alt="HTML"
                height="70px"
                width="70px"
              ></ProgrammingSkillsLogo>
              <ProgrammingSkillsH5>HTML</ProgrammingSkillsH5>
            </ProgrammingSkillsColor>
          </ProgrammingSkills>
          <ProgrammingSkills>
            <ProgrammingSkillsColor>
              <ProgrammingSkillsLogo
                src={cssIcon}
                alt="CSS"
                height="55px"
                width="55px"
              ></ProgrammingSkillsLogo>
              <ProgrammingSkillsH5>CSS</ProgrammingSkillsH5>
            </ProgrammingSkillsColor>
          </ProgrammingSkills>
          <ProgrammingSkills>
            <ProgrammingSkillsColor>
              <ProgrammingSkillsLogo
                src={mysqlIcon}
                alt="MySQL"
                height="55px"
                width="60px"
              ></ProgrammingSkillsLogo>
              <ProgrammingSkillsH5>MySQL</ProgrammingSkillsH5>
            </ProgrammingSkillsColor>
          </ProgrammingSkills>
          <ProgrammingSkills>
            <ProgrammingSkillsColor>
              <ProgrammingSkillsLogo
                src={sqliteIcon}
                alt="SQLite"
                height="55px"
                width="60px"
              ></ProgrammingSkillsLogo>
              <ProgrammingSkillsH5>SQLite</ProgrammingSkillsH5>
            </ProgrammingSkillsColor>
          </ProgrammingSkills>
          <ProgrammingSkills>
            <ProgrammingSkillsColor>
              <ProgrammingSkillsLogo
                src={gitIcon}
                alt="Git"
                height="65px"
                width="65px"
              ></ProgrammingSkillsLogo>
              <ProgrammingSkillsH5>Git</ProgrammingSkillsH5>
            </ProgrammingSkillsColor>
          </ProgrammingSkills>
          <ProgrammingSkills>
            <ProgrammingSkillsColor>
              <ProgrammingSkillsLogo
                src={npmIcon}
                alt="Node Package Manager"
                height="70px"
                width="70px"
              ></ProgrammingSkillsLogo>
              <ProgrammingSkillsH5>npm</ProgrammingSkillsH5>
            </ProgrammingSkillsColor>
          </ProgrammingSkills>
        </ProgrammingSkillsContainer>
      </SkillsContainer>
    </div>
  );
};
