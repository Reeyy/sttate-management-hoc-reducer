import "./App.css";
import Navbar from "./components/Navbar";
import { AppProvider } from "./context/app-context";
import Setting from "./components/Setting";
import DisplayTheme from "./components/DisplayTheme";
import ToogleTheme from "./components/ToogleTheme";
import { ThemeProvider } from "./context/theme-context";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <ThemeProvider>
          <Navbar />
          <hr />
          <Setting />
          <hr />
          <DisplayTheme />
          <ToogleTheme />
        </ThemeProvider>
      </AppProvider>
    </div>
  );
}

export default App;
