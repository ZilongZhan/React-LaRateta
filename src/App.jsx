import { Book, FindItemGame, TapAnimalGame, Puzzle } from "./components";

function App() {
  return (
    <div className="game-window">
      <div className="game-container">
        <FindItemGame />
        <TapAnimalGame />
        <Book />
        <Puzzle />
      </div>
    </div>
  );
}

export default App;
