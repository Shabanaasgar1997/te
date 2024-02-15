import React, { useReducer } from "react";

const initialState = 1;

function reducer(state, action) {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state > 1 ? state - 1 : state;
    case "default":
      return state;
  }
}
function Red() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="container">
        <button
          className="btn btn-danger"
          onClick={() => dispatch("Decrement")}
        >
          -
        </button>
        {count}
        <button
          className="btn btn-success"
          onClick={() => dispatch("Increment")}
        >
          +
        </button>
      </div>
    </>
  );
}

export default Red;
