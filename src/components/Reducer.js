import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "toogleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error("unexpected action");
  }
}

//!untuk nilai awal reduce yang pake di liine 21
const initialState = {
  count: 0,
  theme: "light",
};

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {/* //!type dan payload di deklarasi di button sini yang nanti nya di pake di
       di  //!function reducer action  */}
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        -
      </button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        +
      </button>
      <br />
      theme: {state.theme}
      <button onClick={() => dispatch({ type: "toogleTheme" })}>
        toogle theme
      </button>
    </>
  );

  //  const x = ()=> {

  //   }
  //   function x (){

  //   }

  // //!inipake usesState
  // export default function Reducer() {
  //   const [state, setState] = useState(0);
  //   return (
  //     <>
  //       <button onClick={() => setState(state - 1)}>-</button>
  //       <span>{state}</span>
  //       <button onClick={() => setState(state + 1)}>+</button>
  //     </>
  //   );
  //
}
