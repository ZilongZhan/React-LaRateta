import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PlaySound } from "../shared";
import { gameFinished } from "../shared/gameFinished";

import styles from "./Level.module.css";

export const Level = ({ level, handleChangeLevel, isComplete }) => {
  const navigate = useNavigate();

  const nextLevel = () => {
    handleChangeLevel();
  };

  useEffect(() => {
    gameFinished(isComplete);
  }, [isComplete, navigate]);

  function handleIncreaseLevel(isComplete, nextLevel) {
    return () => {
      PlaySound();
      setTimeout(() => {
        !isComplete && nextLevel();
      }, 2000);
    };
  }

  //TODO: no styles inline
  //TODO: optimize images as webp usin squoosh

  const levelBackgroundModifier = `level-background--${level}`;

  const levelBackgroundClassName = `${styles["level-background"]} ${styles[levelBackgroundModifier]}`;

  return (
    <>
      {!isComplete && (
        <div className={levelBackgroundClassName}>
          <div className={styles["item-background"]}>
            <img
              className={`${styles["item"]} ${styles[`item-${level}`]}`}
              src={`../assets/finditemgame/images/item-${level}.png`}
              alt="item"
              onClick={() => handleIncreaseLevel(isComplete, nextLevel)()}
            />
          </div>
        </div>
      )}
    </>
  );
};
