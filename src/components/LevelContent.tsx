import { useEffect } from "react";
import type { Level } from "../game/Level";

function LevelContent({ level }: { level: Level }) {
	useEffect(() => { }, [level]);

	return null;
}

export default LevelContent;
