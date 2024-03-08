import { Animal } from "./Animal";

export const Card = ({ animal }) => {
  return (
    <div className="animal-card">
      <Animal animal={animal} />
    </div>
  );
};
