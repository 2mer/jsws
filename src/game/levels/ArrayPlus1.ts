import { random } from "radash";
import { Level, MatchRound } from "../Level";

export default Level('add +1 to all elements in the array', () => {
	const entry = Array.from({ length: random(10, 20) }, () => 0);
	const match = entry.map(v => v + 1);

	return MatchRound(entry, match);
})