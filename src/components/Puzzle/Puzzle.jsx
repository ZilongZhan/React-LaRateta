import { useState } from "react";
import { PuzzlePiece } from "./PuzzlePiece";
import "./Puzzle.css";

export const Puzzle = () => {
  const piecesRandomizer = (pieces) => {
    const piecesCopy = [...pieces];
    piecesCopy.sort(() => Math.random() - 0.5);

    const areArraysEqual = pieces.every(
      (piece, index) => piece.id === piecesCopy[index].id
    );

    if (areArraysEqual) return piecesRandomizer(pieces);
    else return piecesCopy;
  };

  const [pieces, setPieces] = useState(
    piecesRandomizer([
      { id: 1, image: "../assets/puzzle/piece-1.jpg" },
      { id: 2, image: "../assets/puzzle/piece-2.jpg" },
      { id: 3, image: "../assets/puzzle/piece-3.jpg" },
      { id: 4, image: "../assets/puzzle/piece-4.jpg" },
    ])
  );

  const didWin = pieces.every((piece, index) => piece.id === index + 1);

  if (didWin) {
    setTimeout(() => {
      const correctSound = new Audio("../assets/correct.mp3");
      correctSound.play();
      setTimeout(() => window.location.reload(), 750);
    }, 1000);
  }

  const [selectedPiece, setSelectedPiece] = useState(null);

  const handlePieceClick = (id) => {
    if (selectedPiece === null) {
      setSelectedPiece(id);
    } else {
      const clickedPieceIndex = pieces.findIndex((piece) => piece.id === id);
      const selectedPieceIndex = pieces.findIndex(
        (piece) => piece.id === selectedPiece
      );

      const updatedPieces = [...pieces];
      const temp = updatedPieces[selectedPieceIndex];
      updatedPieces[selectedPieceIndex] = updatedPieces[clickedPieceIndex];
      updatedPieces[clickedPieceIndex] = temp;

      setPieces(updatedPieces);
      setSelectedPiece(null);
    }
  };

  return (
    <div className="game-display">
      <div className="puzzle-board">
        {pieces.map((piece) => (
          <PuzzlePiece
            key={piece.id}
            id={piece.id}
            image={piece.image}
            onClick={handlePieceClick}
          />
        ))}
      </div>
    </div>
  );
};
