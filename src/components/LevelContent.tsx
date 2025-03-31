import { useEffect, useState } from "react";
import { checkSolution, type Level } from "../game/Level";

function LevelContent({ level }: { level: Level<any, any> }) {
	const [exampleRound, setExampleRound] = useState<string>();

	function generateExampleRound() {
		setExampleRound(
			JSON.stringify(level.generateRound().entry, undefined, 4),
		)
	}

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

		generateExampleRound();

		return () => {
			// biome-ignore lint/performance/noDelete: <explanation>
			delete (window as any).solution;
		};
	}, [level]);

	return (
		<div className="flex flex-col gap-4 flex-1 h-full items-stretch">
			<div className="flex gap-4">
				<p className="text-xl">{level.name}</p>
			</div>
			{typeof level.description === "string" ? (
				<p>{level.description}</p>
			) : (
				level.description
			)}

			<div className="flex flex-col gap-2 flex-1 h-full items-stretch border-8 border-slate-300 rounded-md bg-slate-300">
				<div className="flex justify-between items-end">
					<span className="font-bold text-slate-500 p-2">Example Entry</span>
					<button
						type="button"
						onClick={() => {
							generateExampleRound()
						}}
					>
						generate example entry
					</button>
				</div>

				<pre className="bg-slate-200 rounded-md p-2 w-full flex-1 overflow-auto min-h-0">
					<code>{exampleRound}</code>
				</pre>
			</div>
		</div >
	);
}

export default LevelContent;
