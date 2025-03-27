import { random } from "radash";
import { Level, MatchRound } from "../Level";

export default Level({
	name: 'Create Array',
	description: 'create array of length `l` filled with 0'
}, () => {
	const l = random(1, 100);

	const match = Array.from({ length: l }, () => 0);

	return MatchRound({ l }, match);
})