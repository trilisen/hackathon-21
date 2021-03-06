import * as React from "react";
import Footer from "./Footer";
import Logo from "./Logo";
import Arrow from "../Images/arrow.svg";
import Grandma from "../Images/grandma.png";

const mainStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const titleStyles = {
  display: "flex",
  justifyContent: "flex-start",
  width: "50%",
  paddingTop: "8rem",
  fontFamily: "Lota Grotesque SemiBold",
};

const arrowStyles = {
  display: "flex",
  justifyContent: "center",
  marginRight: "1rem",
};

const containerStyles = {
  display: "flex",
  width: "80%",
  alignItems: "center",
  background: "#D0E2E3",
  marginRight: "3rem",
  marginLeft: "3rem",
  borderRadius: "31px",
  marginBottom: "8rem",
};

const textStyles = {
  margin: "3rem",
  fontFamily: "Lota Grotesque Regular",
  marginLeft: "8rem",
};

const grandmaStyles = {
  height: "100%",
  width: "100%",
};

const grandmaContainerStyles = {
  marginRight: "8rem",
};

const About = () => {
  return (
    <div>
      <Logo></Logo>
      <main style={mainStyles}>
        <div style={titleStyles}>
          <a href="/" style={arrowStyles}>
            <img src={Arrow} alt="Tillbaks" />
          </a>
          <h1>Om projektet</h1>
        </div>
        <div style={containerStyles}>
          <div style={textStyles}>
            <p>
              Svåraste steget är ett samarbete mellan Räddningsmissionen och
              Yrgo yrkeshögskola i Göteborg. Meningen med projektet är att genom
              en interaktiv berättelse presentera Räddningsmissionens arbete och
              uppgiftens tema ”Kärleken är störst”. <br /> <br /> Vi har därför
              gått samman fem elever från utbildningarna UX-design, Game
              creator, Game artist, Webbutvecklare och Manusförfattare för att
              gemensamt skapa denna sida. Vår förhoppning är att du som tar del
              av vår berättelse blir intresserad av att lära dig mer om hur du
              kan bidra till att hjälpa Räddningsmissionens verksamhet och
              samhällets mest utsatta. <br /> <br /> I vår berättelse får du
              följa Doris som förlorat sin man, sitt sammanhang och sitt hem.
              När allt ser som mörkast ut för Doris bestämmer hon sig för att
              överge sin hårda parkbänk för att ta emot den hjälp som erbjuds av
              Räddningsmissionen. Doris erbjuds fika och tak över huvudet -
              något som i dagsläget inte är en självklarhet för alla. <br />{" "}
              <br /> Du kan läsa mer om Räddningsmissionen på
              raddningsmissionen.se samt omvåra respektive utbildningar på
              www.yrgo.se. Läs mer om oss under{" "}
              <a href="/people" style={{ color: "black" }}>
                kreatörer
              </a>{" "}
              i menyn. <br /> <br />
              <b>Tack!</b>
            </p>
          </div>
          <div style={grandmaContainerStyles}>
            <img src={Grandma} alt="Grandma" style={grandmaStyles} />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default About;
