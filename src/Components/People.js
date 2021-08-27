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
            text="Jag har under arbetet gjort tidsestimat samt projektlett. Höll inledningsvis i övningar kopplade till idégenerering i Miro och sammanställde gruppens tankar kring budskap och story i en storyboard. Designat gränssnitt och layout för berättelsen, text och menyer. Användartestat rubriksättning samt förståelsen av berättelsens dialoger."
            background={personColors[0]}
          ></Person>
          <Person
            name="Malva Malmgren"
            title="Grafiker"
            email="mailto:malmal2002@skola.goteborg.se"
            img={MalvaImg}
            text="Jag har jobbat med utvecklingen av Storyn, sett till så att den har början mitt, och slut. Utifrån story tog jag fram en dialog och har jobbat med att finslipa och matcha dialogen till bilderna. Har även skrivit och slipat på övriga texter i samarbete med gruppen."
            background={personColors[1]}
          ></Person>
          <Person
            name="Linda Westerlund"
            title="Manusförfattare"
            email="mailto:linwes2001@skola.goteborg.se"
            img={LindaImg}
            text="Min huvuduppgift har varit att i bild visualisera den historia vi tillsammans sytt ihop. Jag har skapat de karaktärer, bakgrunder, och föremål man kan se och har använt mig utav Räddningsmissionens egna grafiska profil för att väva ihop samarbetet."
            background={personColors[2]}
          ></Person>
          <Person
            name="Jon McGarvie"
            title="Webbutvecklare"
            email="mailto:jonmcg01@gmail.com"
            img={JonImg}
            text="Som webbutvecklare har mitt arbete inneburit att få allting att samlas på ett ställe, den som lägger sista pusselbiten. Jag har även byggt menyer och andra små sidor och försökt att få allting att se bra ut. "
            background={personColors[3]}
          ></Person>
          <Person
            name="Jacob Lundberg"
            title="Spelutvecklare"
            email="mailto:jaclun2003@skola.goteborg.se"
            img={JacobImg}
            text="Min huvuduppgift i detta projektet har varit att bygga system för att på ett snyggt sätt 
            presentera denna berättelse. Jag har också kopplat samman det som de andra i gruppen skapat som exempelvis grafik och manus."
            background={personColors[4]}
          ></Person>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default People;
