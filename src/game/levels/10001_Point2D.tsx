import { Level, MatchRound } from "../Level";

export default Level({
	name: 'Point2D',
	description: (
		<div>
			<p>return a class representing Point2D</p>
			<p>this class should implement the following signatures:</p>
			<ul>
				<li>constructor(x: number, y: number)</li>
				<li>getX(): number</li>
				<li>getY(): number</li>
				<li>setX(value: number): void</li>
				<li>setY(value: number): void</li>
			</ul>
		</div>
	),
	rounds: 1,
}, () => {
	return MatchRound(undefined, 'Hello String');
})