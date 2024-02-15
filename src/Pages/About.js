import React from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";

function About(props) {
  const Normal = () => {
    window.prompt("HEY U CLICKED");
  };
  let count = props.prp1;

  return (
    <>
      <Container>
        <div>hey this is about page</div>
        <div className="container">
          <Button variant="warning">Number</Button>
          {count}
        </div>
        <Button variant="primary" onClick={Normal}>
          Click
        </Button>
      </Container>
    </>
  );
}

export default About;
