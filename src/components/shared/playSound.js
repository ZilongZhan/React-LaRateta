export const PlaySound = ({ sound } = { sound: "default" }) => {
  let audio;

  switch (sound) {
    case "bell":
      audio = new Audio("./assets/book/bell.mp3");
      break;
    default:
      audio = new Audio("./assets/finditemgame/audios/correct.mp3");
  }

  audio.volume = 0.2;
  audio.play();
};
