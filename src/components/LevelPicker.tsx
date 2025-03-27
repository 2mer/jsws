import { useState } from "react";
import type { Level } from "../game/Level";
import { levels } from "../game/levels";

function LevelPicker({
	setLevelIndex,
	levelIndex,
	level,
}: {
	level: Level<any, any>;
	setLevelIndex: any;
	levelIndex: any;
}) {
	const [exampleRound, setExampleRound] = useState<string>();

	return (
		<div className="flex flex-col items-start gap-4 flex-1 h-full">
			<div className="flex gap-2 items-center">
				<button type="button" onClick={() => setLevelIndex((p: number) => p - 1)} disabled={levelIndex <= 0}>&lt; prev</button>
				<div className="bg-slate-100 rounded-md p-2 px-4 w-[100px] text-center">
					{levelIndex + 1}/{levels.length}
				</div>
				<button type="button" onClick={() => setLevelIndex((p: number) => p + 1)} disabled={levelIndex >= levels.length - 1}>next &gt;</button>

				{level.id}
			</div>
			<div className="flex gap-4">
				<p className="text-xl">{level.name}</p>
			</div>
			{typeof level.description === "string" ? (
				<p>{level.description}</p>
			) : (
				level.description
			)}

			<p>entry</p>
			<button
				type="button"
				onClick={() =>
					setExampleRound(
						JSON.stringify(level.generateRound().entry, undefined, 4),
					)
				}
			>
				generate example entry
			</button>
			<pre className="bg-slate-200 rounded-md p-2 w-full flex-1 overflow-auto min-h-0">
				<code>{exampleRound}</code>
			</pre>
		</div>
	);
}

export default LevelPicker;
