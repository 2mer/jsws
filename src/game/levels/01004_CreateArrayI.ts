import { random } from "radash";
import { Level, MatchRound } from "../Level";

export default Level({
	name: 'Create index array',
	description: 'create array of length `l`, where the value in each index is equal to the index'
}, () => {
	const n = random(1, 100);
	const l = random(1, 100);

	const entry = Array.from({ length: l }, () => 0);
	const match = entry.map((_, i) => i);

	return MatchRound({ entry, n }, match);
})