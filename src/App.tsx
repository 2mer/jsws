import { useMemo, useState } from 'react'
import { levels } from './game/levels';
import LevelContent from './components/LevelContent';
import LevelPicker from './components/LevelPicker';

function App() {

	const [levelIndex, setLevelIndex] = useState(0);
	const level = useMemo(() => levels[levelIndex], [levelIndex]);

	return (
		<>
			<div className="w-full h-full flex flex-col">
				<LevelPicker level={level} levelIndex={levelIndex} setLevelIndex={setLevelIndex} />
				<LevelContent level={level}/>
			</div>
		</>
	)
}

export default App
