import React from "react";
import Email from "../Images/mail.svg";

const Person = (props) => {
  const personStyles = {
    display: "flex",
    padding: "2rem",
    margin: "1rem",
    width: "50%",
    borderRadius: "86px",
    background: props.background,
  };

  const imgStyles = {
    borderRadius: "226px",
  };

  const textDivStyles = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginLeft: "3rem",
    marginRight: "3rem",
  };

  const textStyles = {
    margin: 0,
  };

  const pTextStyles = {
    marginTop: "40px",
  };

  const mailDivStyles = {
    display: "flex",
    alignItems: "flex-end",
    margin: "2rem",
  };

  const mailStyles = {
    height: "fit-content",
  };

  return (
    <div style={personStyles}>
      <div>
        <img src={props.img} alt={props.name} style={imgStyles} />
      </div>
      <div style={textDivStyles}>
        <h2 style={textStyles}>{props.name}</h2>
        <h3 style={textStyles}>{props.title}</h3>
        <p style={pTextStyles}>{props.text}</p>
      </div>
      <div style={mailDivStyles}>
        <a
          href={props.email}
          target="_blank"
          rel="noreferrer"
          style={mailStyles}
        >
          <img src={Email} alt="Email" />
        </a>
      </div>
    </div>
  );
};

export default Person;
