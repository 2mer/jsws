import { random } from "radash";
import { Level, Round } from "../Level";
import { expect } from "chai";

export default Level(
	{
		name: "Promise+1",
		description: "read the value of the given promise and return its value + 1",
	},
	() => {
		const n = random(1, 100);
		const valuePromise = Promise.resolve(n);

		return Round(valuePromise, async (v) => {
			expect(await v).to.eq(n + 1);
		});
	},
);
