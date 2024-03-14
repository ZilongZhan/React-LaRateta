import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./home.css";

export const Home = () => {
  const navigate = useNavigate();

  const handleTitolClick = () => {
    navigate("/Book");
  };

  return (
    location.pathname === "/" && (
      <img
        className="titol-image"
        src="../assets/landing/titol.png"
        alt="titol.png"
        onClick={handleTitolClick}
      />
    )
  );
};
