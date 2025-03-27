import { random } from "radash";
import { Level, MatchRound } from "../Level";

export default Level({
	name: 'Array of N',
	description: 'create array of length `l` filled with `n`'
}, () => {
	const n = random(1, 100);
	const l = random(1, 100);

	const match = Array.from({ length: l }, () => n);

	return MatchRound({ n, l }, match);
})