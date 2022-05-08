import { createContext, useContext, useReducer } from "react";

export const ThemeContext = createContext({});

export function useThemeContext() {
  return useContext(ThemeContext);
}

function reducer(state, action) {
  switch (action.type) {
    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
}

const initialState = {
  theme: "dark",
};
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const themeContextValue = [state, dispatch];
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
