import type { ReactNode } from "react";
import { expect } from "chai";
import { getSolutions, saveSolution } from "./solutions";
import { modals } from "@sgty/modals";
import LevelCompleteModal from "../components/LevelCompleteModal";

const LEVEL_ROUND_COUNT = 100;

export type Level<T = any, R = any> = {
	generateRound: () => Round<T, R>;
	description: ReactNode;
	name: ReactNode;
	rounds: number;
	id: string;
};
export function Level<T, R = T>(
	{
		description,
		name,
		rounds = LEVEL_ROUND_COUNT,
	}: { description: ReactNode; name: ReactNode; rounds?: number },
	generateRound: () => Round<T, R>,
) {
	return { description, generateRound, name, rounds, id: "" };
}

export async function checkSolution<T, R>(
	level: Level<T, R>,
	solution: (entry: T) => Promise<R>,
) {
	console.group("Checking solution...");
	try {
		for (let i = 0; i < level.rounds; i++) {
			const round = level.generateRound();

			try {
				const result = await solution(round.entry);

				round.expect(result);
			} catch (err) {
				console.error(`[${i + 1}/${level.rounds}] failed`);
				console.error(err);
				throw err;
			}

			console.log(`[${i + 1}/${level.rounds}] passed`);
		}

		// solution passed!
		saveSolution(level.id as string, solution);
		const modal = modals.open(LevelCompleteModal, {
			level,
			onClose: () => modal.close(),
		});
	} catch (err) {
		// throw err;
	} finally {
		console.groupEnd();
	}
}
export interface Round<T, R = T> {
	entry: T;
	expect: (v: R) => void;
	example?: R;
}
export function Round<T, R>(
	entry: T,
	expect: (v: R) => void,
	example?: R,
): Round<T, R> {
	return { entry, expect, example };
}

export function MatchRound<T, R>(
	entry: T,
	expected: R,
	example?: R,
): Round<T, R> {
	return {
		entry,
		expect: (v) => {
			expect(v).to.deep.eq(expected);
		},
		example,
	};
}

export function isLevelCleared(level: Level) {
	return Boolean(getSolutions(level.id).length);
}
