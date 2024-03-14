import { NavBar } from "./components/shared";
import { Outlet } from "react-router-dom";
import { Home } from "./components";

function App() {
  return (
    <div className="game-window">
      <NavBar />
      <img
        className="larateta-background "
        src="../assets/landing/larateta.png"
        alt="larateta"
      />
      <img
        className="escaleta-background "
        src="../assets/landing/escaleta.png"
        alt="larateta"
      />
      <main className="game-container">
        <Home />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
