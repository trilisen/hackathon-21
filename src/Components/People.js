import * as React from "react";
import Footer from "./Footer";
import Person from "./Person";
import Logo from "./Logo";

import JonImg from "../Images/jon.jpg";
import AliciaImg from "../Images/alicia.jpg";
import JacobImg from "../Images/jacob.jpg";
import MalvaImg from "../Images/malva.jpg";
import LindaImg from "../Images/linda.jpg";
import Arrow from "../Images/arrow.svg";

const personColors = ["#D0E2E3", "#F4E1D1", "#E5E3D9", "#EAC8AC", "#A9CBCB"];

const mainStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const personContainerStyles = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
};

const titleStyles = {
  display: "flex",
  justifyContent: "flex-start",
  width: "50%",
  paddingTop: "8rem",
};

const arrowStyles = {
  display: "flex",
  justifyContent: "center",
  marginRight: "1rem",
};

const People = () => {
  return (
    <div>
      <Logo></Logo>
      <main style={mainStyles}>
        <div style={titleStyles}>
          <a href="/" style={arrowStyles}>
            <img src={Arrow} alt="Tillbaks" />
          </a>
          <h1>Kreatörer</h1>
        </div>
        <div style={personContainerStyles}>
          <Person
            name="Alicia Stolpe"
            title="UX-Designer"
            email="mailto:alisto2002@skola.goteborg.se"
            img={AliciaImg}
            text="1"
            background={personColors[0]}
          ></Person>
          <Person
            name="Malva Malmgren"
            title="Grafiker"
            email="mailto:malmal2002@skola.goteborg.se"
            img={MalvaImg}
            text="2"
            background={personColors[1]}
          ></Person>
          <Person
            name="Linda Westerlund"
            title="Manusförfattare"
            email="mailto:linwes2001@skola.goteborg.se"
            img={LindaImg}
            text="3"
            background={personColors[2]}
          ></Person>
          <Person
            name="Jon McGarvie"
            title="Webbutvecklare"
            email="mailto:jonmcg01@gmail.com"
            img={JonImg}
            text="4"
            background={personColors[3]}
          ></Person>
          <Person
            name="Jacob Lundberg"
            title="Spelutvecklare"
            email="mailto:jaclun2003@skola.goteborg.se"
            img={JacobImg}
            text="5"
            background={personColors[4]}
          ></Person>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default People;
