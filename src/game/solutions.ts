const SOLUTION_LIMIT = 3;

export function getSolutions(key: string): string[] {
	const localStorageValue = localStorage.getItem(key);
	if (!localStorageValue) return [];

	return JSON.parse(localStorageValue);
}

export function saveSolution(key: string, solution: (...args: any) => any) {
	const current = getSolutions(key);

	current.push(solution.toString());

	current.sort((a: string, b: string) => {
		return a.length - b.length;
	});

	localStorage.setItem(key, JSON.stringify(current.slice(0, SOLUTION_LIMIT)));
}
