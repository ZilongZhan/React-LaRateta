import { Book, FindItemGame, TapAnimalGame } from "./components";

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
