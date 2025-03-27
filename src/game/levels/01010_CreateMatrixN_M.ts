import { random } from "radash";
import { Level, MatchRound } from "../Level";

export default Level({
	name: 'Matrix NxM',
	description: 'create a matrix in dimensions `n` x `m` filled with 0'
}, () => {
	const n = random(4, 10);
	const m = random(4, 10);

	const match = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));

	return MatchRound({ n, m }, match);
})