import { useEffect } from "react";
import { checkSolution, Level } from "../game/Level";

function LevelContent({ level }: { level: Level<any, any> }) {
	useEffect(() => {
		Object.defineProperty(window, 'solution', {
			configurable: true,
			set(v) {
				checkSolution(level, v);
			},
			get() {
				return (solution: any) => {
					checkSolution(level, solution)
				}; 
			}
		})

		return () => {
			delete (window as any).solution
		}
	}, [level]);

	return null;
}

export default LevelContent;
