// export const Level = ({ props }) => {
export const Level = ({ level, handleChangeLevel, isComplete }) => {
  const playSound = () => {
    const audio = new Audio(`./assets/finditemgame/audios/correct.mp3`);
    audio.play();
  };

  const nextLevel = () => {
    handleChangeLevel();
  };

  function handleIncreaseLevel(playSound, isComplete, nextLevel) {
    if (isComplete) {
      console.log("complete");
      return;
    }
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
  return (
    <>
      <style>
        {`
          .level-background {
            background-image: url("../assets/finditemgame/images/level-${level}.webp");
          }
        `}
      </style>
      <div className="level-background">
        <img
          className={`item item-${level}`}
          src={`../assets/finditemgame/images/item-${level}.png`}
          alt="item"
          onClick={handleIncreaseLevel(playSound, isComplete, nextLevel)}
        />
        {isComplete && <div>OK 🙌</div>}
      </div>
    </>
  );
};
