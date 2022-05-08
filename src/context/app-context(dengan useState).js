import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

export const Appcontext = createContext({});

export function useAppContext() {
  return useContext(Appcontext);
}

export function AppProvider({ children }) {
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const user = {
      name: "jooohn dwa",
      avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    };

    setUser(user);
  }, []);

  const appContextValue = {
    user: user,
    func: () => alert("memasukan inject fucntion lewat contex"),
    setUser: setUser,
    theme: theme,
    setTheme: setTheme,
  };

  return (
    <Appcontext.Provider value={appContextValue}>
      {children}
    </Appcontext.Provider>
  );
}
