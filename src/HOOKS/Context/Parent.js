import React, { createContext } from "react";
import Child1 from "./Child1";

const data = createContext();

function Parent() {
  let name = "Shabana";
  return (
    <>
      <data.Provider value={name}>
        <Child1 />
      </data.Provider>
    </>
  );
}

export default Parent;
export { data };
