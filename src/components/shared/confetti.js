import JSConfetti from "js-confetti";

const confetti = new JSConfetti();

export const playConfetti = () => {
  confetti.addConfetti();
};
