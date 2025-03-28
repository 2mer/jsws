import { isLevelCleared, type Level } from "../game/Level";
import { levels } from "../game/levels";
import { levelIndex$ } from "../state";

function LevelPicker({
	level,
}: {
	level: Level<any, any>;
}) {

	const levelIndex = levelIndex$.use()
	const hasNextLevel = levelIndex < levels.length - 1;

	return (
		<div className="flex items-start gap-4 w-full">
			<div className="flex gap-2 items-center flex-1">
				<span>{level.id}</span>
				<div className="flex-1" />
				<button type="button" onClick={() => levelIndex$.set(levelIndex - 1)} disabled={levelIndex <= 0}>&lt; prev</button>
				<div className="bg-slate-100 rounded-md p-2 px-4 w-[100px] text-center">
					{levelIndex + 1}/{levels.length}
				</div>

				{Boolean(hasNextLevel) && (
					<button type="button" onClick={() => levelIndex$.set(levelIndex + 1)} disabled={!isLevelCleared(level)}>next &gt;</button>
				)}

			</div>

		</div>
	);
}

export default LevelPicker;
