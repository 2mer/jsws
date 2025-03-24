import { random } from "radash";
import { Level, MatchRound } from "../Level";

export default Level('fill array with `n`', () => {
	const entry = Array.from({ length: random(10, 20) }, () => 0);
	const n = random(1, 100);
	const match = entry.map(() => n);

	return MatchRound({ entry, n }, match);
})