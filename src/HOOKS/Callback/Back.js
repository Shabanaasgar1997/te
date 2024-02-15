import React, { useCallback, useState } from "react";
import Child from "./Child";

function Back() {
  const [count, setCount] = useState(1);

  const Sh = useCallback(() => {}, []);

  return (
    <>
      <Child sh={Sh} />
      <h1>{count}</h1>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        +
      </button>
    </>
  );
}

export default Back;
