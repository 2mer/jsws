import { Level, MatchRound } from "../Level";

export default Level({
	name: 'Hello String',
	description: 'return `Hello String`',
	rounds: 1,
}, () => {
	return MatchRound(undefined, 'Hello String');
})