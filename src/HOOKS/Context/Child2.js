import React, { useContext } from "react";
import { data } from "./Parent";

function Child2() {
  const name = useContext(data);
  console.log(name);
  return <div>{name}</div>;
}

export default Child2;
