import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    default:
      throw new Error();
  }
}

export default function Reducer() {
  const [count, setCount] = useReducer(reducer, 0);
  return (
    <>
      <button onClick={() => setCount({ type: "decrement", payload: 1 })}>
        -
      </button>
      <span>{count}</span>
      <button onClick={() => setCount({ type: "increment", payload: 1 })}>
        +
      </button>
    </>
  );
}
