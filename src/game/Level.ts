import { ReactNode } from "react";
import { expect } from 'chai';

const LEVEL_ROUND_COUNT = 100;

export type Level<T, R> = { generateRound: () => Round<T, R>, description: ReactNode }
export function Level<T, R = T>(description: string, generateRound: () => Round<T, R>) {
	return { description, generateRound };
}

export async function checkSolution<T, R>(level: Level<T, R>, solution: (entry: T) => Promise<R>) {
	console.group("Checking solution...")
	try {
		for (let i = 0; i < LEVEL_ROUND_COUNT; i++) {
			const round = level.generateRound();

			try {
				const result = await solution(round.entry);

				round.expect(result);
			} catch (err) {
				console.error(`[${i + 1}/${LEVEL_ROUND_COUNT}] failed`)
				console.error(err);
				throw err;
			}

			console.log(`[${i + 1}/${LEVEL_ROUND_COUNT}] passed`)
		}
	} catch (err) {
		// throw err;
	} finally {
		console.groupEnd()
	}
}
export interface Round<T, R = T> {
	entry: T;
	expect: (v: R) => void;
}
export function Round<T, R>(entry: T, expect: (v: R) => void): Round<T, R> {
	return { entry, expect }
}

export function MatchRound<T, R>(entry: T, expected: R): Round<T, R> {
	return {
		entry,
		expect: (v) => {
			expect(v).to.deep.eq(expected);
		}
	}
}