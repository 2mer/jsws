import { expect } from "chai";
import { Level, Round } from "../Level";

export default Level('pass the entry without any modification', () => {
	const entry = Symbol("unique");
	const match = entry;

	return Round(entry, (v) => expect(v).to.eq(match));
})