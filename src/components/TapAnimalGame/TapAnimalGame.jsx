import "./TapAnimalGame.css";
import { animalData } from "../../../assets";
import { CardsList } from "./CardsList";

export const TapAnimalGame = () => {
  return (
    <div className="game-display">
      <CardsList animalData={animalData} />
    </div>
  );
};
