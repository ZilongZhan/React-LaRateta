import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Book">Book</Link>
      <Link to="/find-item-game">FindItemGame</Link>
      <Link to="/tap-animal-game">TapAnimalGame</Link>
      <Link to="/Puzzle">Puzzle</Link>
    </div>
  );
};
