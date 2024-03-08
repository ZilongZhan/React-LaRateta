import "./FindItemGame.css";
import { useState } from "react";
import { Level } from "./Level";

export const FindItemGame = () => {
  const [level, setLevel] = useState(1);

  const props = { level: level, setter: setLevel };

  return (
    <div className="game-display">
      <Level props={props} />
    </div>
  );
};
