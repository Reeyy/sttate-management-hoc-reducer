import { useThemeContext } from "../context/theme-context";

export default function DisplayTheme() {
  const [state] = useThemeContext();
  return <div>{state.theme}</div>;
}
