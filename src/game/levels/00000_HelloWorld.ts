import { Level, Round } from "../Level";

export default Level({
	name: 'Hello World',
	description: 'to submit a solution, run `solution((entry) => /*...*/ value)` or `solution = (entry) => /*...*/ value`',
	rounds: 1,
}, () => {
	const entry = undefined;

	return Round(entry, () => { });
})