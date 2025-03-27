import { random } from "radash";
import { Level, MatchRound } from "../Level";

export default Level({
	name: '1 in i',
	description: 'create array of length `10` filled with 0, in index `i` the array will contain `1`'
}, () => {
	const i = random(0, 9);

	const match = Array.from({ length: 10 }, (_, idx) => idx === i ? 1 : 0);

	return MatchRound({ i }, match);
})