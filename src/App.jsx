import { Book, FindItemGame, TapAnimalGame, Puzzle } from "./components";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="game-window">
      {/* <Header /> */}
      {/* <NavBar /> */}
      <Link to="/Book">Book</Link>
      <Link to="/find-item-game">FindItemGame</Link>
      <Link to="/tap-animal-game">TapAnimalGame</Link>
      <Link to="/Puzzle">Puzzle</Link>
      <main className="game-container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
