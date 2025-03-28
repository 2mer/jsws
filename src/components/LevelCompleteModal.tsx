import type { Level } from "../game/Level";
import { levels } from "../game/levels";
import { levelIndex$ } from "../state";
import Modal from "./Modal";

function LevelCompleteModal({
	level,
	onClose,
}: { level: Level; onClose: () => void }) {
	const levelIndex = levelIndex$.use();

	const isLastLevel = levelIndex === levels.length - 1;

	return (
		<Modal onClose={onClose}>
			<p>🎉 Level Complete - {level.name} 🎉</p>

			<div className="flex gap-2 justify-end">
				<button type="button" onClick={onClose}>close</button>
				{!isLastLevel && (
					<button type="button" onClick={() => {
						onClose();
						levelIndex$.set(levelIndex + 1);
					}}>next</button>
				)}
			</div>
		</Modal>
	);
}

export default LevelCompleteModal;
