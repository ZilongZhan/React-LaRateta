import { useNavigate } from "react-router-dom";

import styles from "./Level.module.css";
import { useEffect } from "react";

// export const Level = ({ props }) => {
export const Level = ({ level, handleChangeLevel, isComplete }) => {
  const navigate = useNavigate();

  const playSound = () => {
    const audio = new Audio(`./assets/finditemgame/audios/correct.mp3`);
    audio.play();
  };

  const nextLevel = () => {
    handleChangeLevel();
  };

  function handleIncreaseLevel(playSound, isComplete, nextLevel) {
    useEffect(() => {
      if (isComplete) {
        navigate("/");
      }
    }, [isComplete, navigate]);

    return () => {
      playSound();
      setTimeout(() => {
        // level < 3 && nextLevel();
        !isComplete && nextLevel();
      }, 2000);
    };
  }

  //TODO: no styles inline
  //TODO: optimize images as webp usin squoosh

  const levelBackgroundModifier = `level-background--${level}`;

  const levelBackgroundClassName = `${styles["level-background"]} ${styles[levelBackgroundModifier]}`;

  return (
    <div className={levelBackgroundClassName}>
      <div className={styles["item-background"]}>
        <img
          className={`${styles["item"]} ${styles[`item-${level}`]}`}
          src={`../assets/finditemgame/images/item-${level}.png`}
          alt="item"
          onClick={handleIncreaseLevel(playSound, isComplete, nextLevel)}
        />
      </div>
    </div>
  );
};
