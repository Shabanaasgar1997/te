import React, { useMemo, useState } from "react";

function MemoC() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("Shabana");
  const Add = () => {
    setCount(count + 1);
  };
  const Delete = () => {
    setCount(count - 1);
  };

  const PriceDet = useMemo(
    function Price() {
      console.log("**************");
      return count * 100;
    },
    [count]
  );
  return (
    <>
      {PriceDet}
      <button className="btn btn-success" onClick={() => Add()}>
        +
      </button>
      {count}
      <button className="btn btn-success" onClick={() => Delete()}>
        -
      </button>
      <button className="btn btn-info" onClick={() => setName("Anjum")}>
        CHANGE
      </button>
    </>
  );
}

export default MemoC;
