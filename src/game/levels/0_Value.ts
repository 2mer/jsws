import { expect } from "chai";
import { Level, Round } from "../Level";

export default Level('return `hello world`', () => {
	const entry = undefined;
	const match = 'hello world';

	return Round(entry, (v) => expect(v).to.eq(match));
})