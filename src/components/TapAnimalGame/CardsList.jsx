import { Card } from "./Card";

export const CardsList = ({ animalData }) => {
  return (
    <div className="animal-cards_list">
      {animalData.map((animal, index) => {
        return <Card key={index} animal={animal} />;
      })}
    </div>
  );
};
