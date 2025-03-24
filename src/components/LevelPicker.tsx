import { useState } from "react";
import { Level } from "../game/Level";

function LevelPicker({ setLevelIndex, levelIndex, level }: { level: Level<any, any> , setLevelIndex, levelIndex }) {
	const [exampleRound, setExampleRound] = useState<string>();
	
	return (
		<div className="flex flex-col items-start gap-4 m-4 flex-1">
			<div className="flex gap-4">
			<p className="text-xl">Level {levelIndex + 1}</p>
			<button onClick={() => setLevelIndex(p => p-1)}>&lt; prev</button>
			<button onClick={() => setLevelIndex(p => p+1)}>next &gt;</button>
			</div>
			<p>{level.description}</p>

			<p>entry</p>
			<button className="bg-slate-500 rounded-md p-2" onClick={() => setExampleRound(JSON.stringify(level.generateRound().entry, undefined, 4))}>generate example entry</button>
			<pre className="bg-slate-200 rounded-md p-2 w-full flex-1">
				<code>
					{exampleRound}
				</code>
			</pre>
		</div>
	);
}

export default LevelPicker;