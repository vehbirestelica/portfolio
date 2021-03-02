import React from "react";
import { ExternalLink } from "react-external-link";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  LangUsed,
  ServicesP,
  LangContaner,
  Lang,
} from "./ServicesElemets";

const Services = () => {
  const linkStyle = {
    color: "#2F4F4F",
  };
  return (
    <div id="projects">
      <ServicesContainer>
        <ServicesH1>My Projects</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ExternalLink
              href="https://github.com/vehbirestelica/portfolio"
              style={linkStyle}
            >
              <ServicesH2>Portofolio</ServicesH2>
              <Lang>
                <LangContaner>
                  <LangUsed>CSS</LangUsed>
                </LangContaner>
                <LangContaner>
                  <LangUsed>ReactJs</LangUsed>
                </LangContaner>
                <LangContaner>
                  <LangUsed>EmailJS</LangUsed>
                </LangContaner>
              </Lang>
              <ServicesP>
                Portfolio Webste is this current website, it's an open-source
                and is built using HTML5, CSS3 and ReactJs. It also includes
                features like smooth-scroll, is a fully responsive design.
              </ServicesP>
            </ExternalLink>
          </ServicesCard>
          <ServicesCard>
            <ExternalLink
              href="https://github.com/vehbirestelica/"
              style={linkStyle}
            >
              <ServicesH2>E-Commerce</ServicesH2>
              <Lang>
                <LangContaner>
                  <LangUsed>CSS</LangUsed>
                </LangContaner>
                <LangContaner>
                  <LangUsed>ReactJs</LangUsed>
                </LangContaner>
                <LangContaner>
                  <LangUsed>Firebase</LangUsed>
                </LangContaner>
              </Lang>
              <ServicesP>
                Online website for online commerce which refers to the buying
                and selling things using the internet. <b>On Progress...</b>
              </ServicesP>
            </ExternalLink>
          </ServicesCard>
          <ServicesCard>
            <ExternalLink
              href="https://github.com/vehbirestelica/FourSquareCypher"
              style={linkStyle}
            >
              <ServicesH2>4 Square Cypher</ServicesH2>
              <Lang>
                <LangContaner>
                  <LangUsed>C#</LangUsed>
                </LangContaner>
              </Lang>
              <ServicesP>
                Its a console application that converts the given plaintext into
                ciphertext. The four-square cipher uses four 5 by 5 (5x5)
                matrices arranged in a square.
              </ServicesP>
            </ExternalLink>
          </ServicesCard>
          <ServicesCard>
            <ExternalLink
              href="https://github.com/vehbirestelica/painter"
              style={linkStyle}
            >
              <ServicesH2>Painter</ServicesH2>
              <Lang>
                <LangContaner>
                  <LangUsed>Java</LangUsed>
                </LangContaner>
                <LangContaner>
                  <LangUsed>Swing</LangUsed>
                </LangContaner>
              </Lang>
              <ServicesP>
                A simple desktop application built using Graphics2D which gives
                you the option to draw in four different shapes: free drawing,
                line, eclipse and rectangle drawing, undo and rotate drawing.
              </ServicesP>
            </ExternalLink>
          </ServicesCard>
          <ServicesCard>
            <ExternalLink
              href="https://github.com/vehbirestelica/eSuperleague"
              style={linkStyle}
            >
              <ServicesH2>e-Superleague</ServicesH2>
              <Lang>
                <LangContaner>
                  <LangUsed>Java</LangUsed>
                </LangContaner>
                <LangContaner>
                  <LangUsed>Swing</LangUsed>
                </LangContaner>
                <LangContaner>
                  <LangUsed>MySQL</LangUsed>
                </LangContaner>
              </Lang>
              <ServicesP>
                GUI application which deals with the results, stats of a
                football league. It gives the admin an option to manipulate with
                data, and the users to see the results, check standings, see the
                fixtures, etc.
              </ServicesP>
            </ExternalLink>
          </ServicesCard>
          <ServicesCard>
            <ExternalLink
              href="https://github.com/vehbirestelica/covidTracer"
              style={linkStyle}
            >
              <ServicesH2>COVID-19 Tracer</ServicesH2>
              <Lang>
                <LangContaner>
                  <LangUsed>Java</LangUsed>
                </LangContaner>
                <LangContaner>
                  <LangUsed>Firebase</LangUsed>
                </LangContaner>
                <LangContaner>
                  <LangUsed>SQlite</LangUsed>
                </LangContaner>
              </Lang>
              <ServicesP>
                This is an desktop GUI app, built by using Java Swing. It's an
                app for doctors only and it tracks COVID-19 cases which gives
                the right to check current virus cases, add a new virus case and
                updating an existing one.
              </ServicesP>
            </ExternalLink>
          </ServicesCard>
          <ServicesCard>
            <ExternalLink
              href="https://github.com/vehbirestelica/"
              style={linkStyle}
            >
              <ServicesH2>Calculator</ServicesH2>
              <Lang>
                <LangContaner>
                  <LangUsed>Java</LangUsed>
                </LangContaner>
                <LangContaner>
                  <LangUsed>Swing</LangUsed>
                </LangContaner>
              </Lang>
              <ServicesP>
                Simple GUI calculator with basics mathematic's oparations such
                as, addition, subtraction, multiplying and division{" "}
                <b>On Progress...</b>
              </ServicesP>
            </ExternalLink>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </div>
  );
};

export default Services;
