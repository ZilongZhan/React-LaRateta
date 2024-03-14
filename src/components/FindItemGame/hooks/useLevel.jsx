import { useState } from "react";

export const useLevel = ({ threshold }) => {
  const INITIAL_VALUE = 1;

  const [level, setLevel] = useState(INITIAL_VALUE);

  const handleChangeLevel = () => {
    setLevel((prevLevel) => {
      return prevLevel + 1;
    });
  };

  return {
    level,
    handleChangeLevel,
    isComplete: level > threshold,
  };
};
