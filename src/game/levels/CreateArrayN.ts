import { random } from "radash";
import { Level, MatchRound } from "../Level";

export default Level('create array of length `l` filled with `n`', () => {
	const n = random(1, 100);
	const l = random(1, 100);

	const entry = Array.from({ length: l }, () => 0);
	const match = entry.map(() => n);

	return MatchRound({ entry, n, l }, match);
})