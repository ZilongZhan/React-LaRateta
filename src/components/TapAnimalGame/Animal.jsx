export const Animal = ({ animal }) => {
  const playSound = () => {
    const audio = new Audio(`./assets/tapanimalgame/audios/${animal.audio}`);
    audio.play();
  };

  return (
    <img className="animal"
      src={`../assets/tapanimalgame/images/${animal.image}`}
      alt={animal.name}
      onClick={playSound}
    />
  );
};
