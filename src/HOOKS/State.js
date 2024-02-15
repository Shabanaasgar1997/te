import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

let initalState = false;
function State() {
  const [toggleText, setToggleText] = useState(initalState);
  const [eye, setEye] = useState(initalState);
  const [image, setImage] = useState(require("../images/1.jpg"));
  const [darkTheme, setDarkTheme] = useState(initalState);
  const ToggleWord = () => {
    setToggleText(!toggleText);
  };
  const IconChange = () => {
    setEye(!eye);
  };
  const ImageChange = (e) => {
    console.log(e.src);
    setImage(e.src);
    console.log(...image);
  };

  const DarkThemeToggle = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <>
      {darkTheme ? (
        <style>
          {`
        
        *

        {
            background:black;
            color:white;
        }
        
        `}
        </style>
      ) : null}
      <Container>
        <div>
          <button className="btn btn-primary" onClick={() => DarkThemeToggle()}>
            Dark
          </button>
        </div>
        {toggleText ? <h1>WELCOME TO THE STATES CONCEPT</h1> : null}
        <button className="btn btn-warning" onClick={() => ToggleWord()}>
          TOGGLE
        </button>

        <form className="d-flex align-items-center m-lg-2">
          <input
            type={eye ? "text" : "password"}
            className="form-control w-25 m-lg-2"
          />
          <span onClick={() => IconChange()}>
            {eye ? <FaEyeSlash /> : <FaEye />}
          </span>
        </form>
      </Container>

      <Container className="w-75 p-lg-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="my-lg-2">
              <img
                src={require("../images/1.jpg")}
                alt=""
                className="img-fluid w-25"
                onMouseOver={(e) => ImageChange(e.target)}
              />
            </div>
            <div className=" my-lg-2">
              <img
                src={require("../images/2.jpg")}
                alt=""
                className="img-fluid w-25"
                onMouseOver={(e) => ImageChange(e.target)}
              />
            </div>
            <div className="my-lg-2">
              <img
                src={require("../images/3.jpg")}
                alt=""
                className="img-fluid w-25"
                onMouseOver={(e) => ImageChange(e.target)}
              />
            </div>
            <div className="my-lg-2">
              <img
                src={require("../images/4.jpg")}
                alt=""
                onMouseOver={(e) => ImageChange(e.target)}
                className="img-fluid w-25"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="">
              <img src={image} alt="" className="img-fluid w-50" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default State;
