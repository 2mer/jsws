import { useEffect } from "react";
import { checkSolution, type Level } from "../game/Level";

function LevelContent({ level }: { level: Level<any, any> }) {
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

	return null;
}

export default LevelContent;
