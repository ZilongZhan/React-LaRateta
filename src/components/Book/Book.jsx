import "./Book.css";
import { bookPages } from "../../../assets";
import { CheckboxList } from "./CheckboxList";
import { BookCovers } from "./BookCovers";

export const Book = () => {
  return (
    <div className="game-display">
      <CheckboxList bookPages={bookPages} />
      <div className="book">
        <BookCovers />
      </div>
    </div>
  );
};
