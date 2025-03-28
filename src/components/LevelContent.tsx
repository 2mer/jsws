import { useEffect, useState } from "react";
import { checkSolution, type Level } from "../game/Level";

function LevelContent({ level }: { level: Level<any, any> }) {
	const [exampleRound, setExampleRound] = useState<string>();


	useEffect(() => {
		Object.defineProperty(window, "solution", {
			configurable: true,
			set(v) {
				checkSolution(level, v);
			},
			get() {
				return (solution: any) => {
					checkSolution(level, solution);
				};
			},
		});

		return () => {
			// biome-ignore lint/performance/noDelete: <explanation>
			delete (window as any).solution;
		};
	}, [level]);

	return (
		<div className="flex flex-col items-start gap-4 flex-1 h-full">
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

export default LevelContent;
