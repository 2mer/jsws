import { isEqual } from "radash";

const LEVEL_ROUND_COUNT = 100;

export abstract class Level<T, R> {
	abstract generateRound(): Round<T, R>;

	async check(solution: (entry: T) => Promise<R>) {
		for (let i = 0; i < LEVEL_ROUND_COUNT; i++) {
			const round = this.generateRound();

			const result = await solution(round.entry);

			if (!isEqual(round.expected, result)) {
				console.error("solution did not cover test case", {
					result,
					expected: round.expected,
				});
				return;
			}
		}
	}
}

interface Round<T, R> {
	entry: T;
	expected: R;
}
