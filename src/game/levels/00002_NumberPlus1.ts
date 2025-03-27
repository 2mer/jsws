import { random } from "radash";
import { Level, MatchRound } from "../Level";

export default Level({
	name: 'N + 1',
	description: 'add +1 to the entry',
}, () => {
	const entry = random(0, 100);
	const match = entry + 1;

	return MatchRound(entry, match);
})