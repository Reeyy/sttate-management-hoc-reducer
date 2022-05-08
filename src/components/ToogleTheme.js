import { useThemeContext } from "../context/theme-context";

export default function ToogleTheme() {
  // const [state, dispatch] = useThemeContext();
  //!karena state ga di pake jadi di , aja agar di skip

  const [, dispatch] = useThemeContext();

  return (
    <button onClick={() => dispatch({ type: "toggleTheme" })}>
      Toogle theme
    </button>
  );
}
