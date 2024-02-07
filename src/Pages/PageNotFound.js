import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function PageNotFound() {
  let params = useParams();
  console.log(params);
  let id = params.name;
  console.log(id);
  return (
    <>
      <style>
        {`
        
        span
        {
            color:green;
            text-decoration:underline;
        }
        
        `}
      </style>
      <Container>
        <h1 className="text-danger">
          OOPS! <span>{id}</span> PAGE NOT FOUND{" "}
        </h1>
      </Container>
    </>
  );
}

export default PageNotFound;
