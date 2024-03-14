import "./Puzzle.css";

export const PuzzlePiece = ({ id, image, onClick }) => {
  return (
    <div
      className="puzzle-piece"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
      onClick={() => onClick(id)}
    >
      {id}
    </div>
  );
};
