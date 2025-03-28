import { useMemo, useState } from 'react'
import { levels } from './game/levels';
import LevelContent from './components/LevelContent';
import LevelPicker from './components/LevelPicker';
import { modals } from '@sgty/modals';
import { levelIndex$ } from './state';

function App() {

	const levelIndex = levelIndex$.use();
	const level = useMemo(() => levels[levelIndex], [levelIndex]);

	return (
		<>
			<modals.renderer />
			<div className="w-full h-full flex flex-col relative p-4 gap-4">
				<LevelContent level={level} />
				<LevelPicker level={level} />
			</div>
		</>
	)
}

export default App
