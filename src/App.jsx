import "./App.css";
import { TapAnimalGame } from "./components/index";
import { FindItemGame } from "./components/index";
import { Book } from "./components/Book";

function App() {
  return (
    <div className="game-window">
      <div className="game-container">
        <FindItemGame />
        <TapAnimalGame />
        <Book />
      </div>
    </div>
  );
}

export default App;
