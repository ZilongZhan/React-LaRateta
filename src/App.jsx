import { NavBar } from "./components/shared";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="game-window">
      <NavBar />
      <main className="game-container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
