import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";

export const Appcontext = createContext({});

export function useAppContext() {
  return useContext(Appcontext);
}

function reducer(state, action) {
  switch (action.type) {
    case "updateUser":
      return { ...state, user: action.payload };
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
}

const initialState = {
  user: {},
};
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = {
      name: "Jhon doe",
      avatar: "https://randomuser.me/api/portraits/men/48.jpg",
    };

    dispatch({
      type: "updateUser",
      payload: user,
    });
  }, []);
  const appContextValue = [state, dispatch];
  return (
    <Appcontext.Provider value={appContextValue}>
      {children}
    </Appcontext.Provider>
  );
}
