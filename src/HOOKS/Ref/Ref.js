import React, { useRef } from "react";
import { Container } from "react-bootstrap";

function Ref() {
  let name = useRef();
  let pic = useRef();
  const Change = () => {
    console.log(name.current);
    name.current.style = "background:red; color:white";
  };

  const ChangeImage = () => {
    console.log(pic.current);
    pic.current.style = "width:150px;border:5px solid green";
  };
  return (
    <>
      <Container>
        <input
          type="text"
          ref={name}
          className="form-control"
          onChange={() => Change()}
        />
        <img
          src={require("../../images/1.jpg")}
          style={{ width: "150px" }}
          ref={pic}
          alt=""
          onClick={() => ChangeImage()}
        />
      </Container>
    </>
  );
}

export default Ref;
