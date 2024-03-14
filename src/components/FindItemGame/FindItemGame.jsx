//fix import order
import { Level } from "./Level";
import { useLevel } from "./hooks";

export const FindItemGame = () => {
  const { level, handleChangeLevel, isComplete } = useLevel({ threshold: 3 });

  // const [level, setLevel] = useState(1);

  // const props = { level: level, setter: setLevel };

  // const handleChangeLevel = () => {
  //   setLevel((prevLevel) => {
  //     return prevLevel + 1;
  //   });
  // };

  return (
    <div className="game-display">
      <Level
        level={level}
        handleChangeLevel={handleChangeLevel}
        isComplete={isComplete}
      />
      {/* <Level {...{ level: level, setter: setLevel }} /> */}
    </div>
  );
};
