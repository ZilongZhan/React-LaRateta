export const Level = ({ props }) => {
  const playSound = () => {
    const audio = new Audio(`./assets/finditemgame/audios/correct.mp3`);
    audio.play();
  };

  const nextLevel = () => {
    props.setter(props.level + 1);
  };

  return (
    <>
      <style>
        {`
          .level-background {
            background-image: url("../assets/finditemgame/images/level-${props.level}.jpg");
          }
        `}
      </style>
      <div className="level-background">
        <img
          className={`item item-${props.level}`}
          src={`../assets/finditemgame/images/item-${props.level}.png`}
          alt="item"
          onClick={() => {
            playSound();
            setTimeout(() => {
              props.level < 3 && nextLevel();
            }, 2000);
          }}
        />
      </div>
    </>
  );
};
