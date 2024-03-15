import { Link } from "react-router-dom";

export const NavBar = () => {
  const assetsSrc = "../assets/navbar";

  return (
    <div className="NavBar">
      <Link to="/">
        <img className="NavBar-item" src={`${assetsSrc}/house.png`} alt="house" />
      </Link>
      <Link to="/Book">
        <img className="NavBar-item" src={`${assetsSrc}/book.png`} alt="book" />
      </Link>
      <Link to="/find-item-game">
        <img className="NavBar-item" src={`${assetsSrc}/loupe.png`} alt="loupe" />
      </Link>
      <Link to="/tap-animal-game">
        <img className="NavBar-item" src={`${assetsSrc}/habitat.png`} alt="habitat" />
      </Link>
      <Link to="/Puzzle">
        <img className="NavBar-item" src={`${assetsSrc}/jigsaw.png`} alt="jigsaw" />
      </Link>
    </div>
  );
};
