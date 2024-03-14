import { Book, FindItemGame, TapAnimalGame, Puzzle } from "./components";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="game-window">
      <div className="game-container">
        {/* <FindItemGame />
        <TapAnimalGame />
        <Book />
        <Puzzle /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
