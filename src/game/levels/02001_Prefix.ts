import fc from "fast-check";
import { Level, MatchRound } from "../Level";

export default Level(
	{
		name: "Prefix",
		description: "return the entry prefixed with `prefix_`",
	},
	() => {
		const e = fc.sample(fc.string(), 1)[0];

		return MatchRound(e, `prefix_${e}`);
	},
);
