import { alphabetical } from "radash";
import type { Level } from "./Level";

const modules = import.meta.glob("./levels/*", { eager: true });

const levelEntries = Object.entries(modules) as [string, { default: Level }][];
levelEntries.forEach(([path, module]) => {
	const fileName = path.split("/").splice(-1, 1)[0];

	module.default.id = fileName;
});

export const levels = alphabetical(levelEntries, (e) => e[0])
	.map((e) => e[1])
	.map((m: any) => m.default);
