import { useAppContext } from "../context/app-context";

export default function NavbarUserAvatar() {
  const [state] = useAppContext();
  return <img src={state?.user?.avatar} alt="avatar" width="50" />;
  //! agar tidak erpr pake ? jika tidak ada data
}
