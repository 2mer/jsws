import { useState } from "react";
import { Level } from "../game/Level";
import { levels } from "../game/levels";

function LevelPicker({
  setLevelIndex,
  levelIndex,
  level,
}: {
  level: Level<any, any>;
  setLevelIndex;
  levelIndex;
}) {
  const [exampleRound, setExampleRound] = useState<string>();

  return (
    <div className="flex flex-col items-start gap-4 m-4 flex-1">
        <div className="flex gap-2 items-center">
          <button onClick={() => setLevelIndex((p) => p - 1)}>&lt; prev</button>
          <div>
            {levelIndex + 1}/{levels.length}
          </div>
          <button onClick={() => setLevelIndex((p) => p + 1)}>next &gt;</button>
        </div>
      <div className="flex gap-4">
        <p className="text-xl">{level.name}</p>
      </div>
      {typeof level.description === 'string' ? (<p>{level.description}</p>) : (level.description)}

      <p>entry</p>
      <button
        className="bg-slate-500 rounded-md p-2"
        onClick={() =>
          setExampleRound(
            JSON.stringify(level.generateRound().entry, undefined, 4)
          )
        }
      >
        generate example entry
      </button>
      <pre className="bg-slate-200 rounded-md p-2 w-full flex-1">
        <code>{exampleRound}</code>
      </pre>
    </div>
  );
}

export default LevelPicker;
