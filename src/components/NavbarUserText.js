import { useAppContext } from "../context/app-context";

export default function NavbarUserText() {
  const [state] = useAppContext();
  return <span>hi, {state?.user?.name}</span>;
}
