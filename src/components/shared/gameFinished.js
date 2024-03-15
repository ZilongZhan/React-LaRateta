import { playConfetti } from "./confetti";
import { PlaySound } from "./playSound";

export const gameFinished = (isComplete) => {
  if (isComplete) {
    PlaySound();
    playConfetti();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
};
