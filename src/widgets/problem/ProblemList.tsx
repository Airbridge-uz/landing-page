import { Globe, List, Puzzle, ShieldAlert } from "lucide-react";
import { ProblemCard } from "./ProblemCard";

const problems = [
	{
		icon: Puzzle,
		title: "Disconnected",
		description: "Flights, hotels, and payments live on different sites.",
	},
	{
		icon: Globe,
		title: "Not Local",
		description: "Languages and payment methods are ignored.",
	},
	{
		icon: List,
		title: "Static Data",
		description: "Endless listings, zero guidance.",
	},
	{
		icon: ShieldAlert,
		title: "Redirect Anxiety",
		description: "Users don’t trust unknown checkout pages.",
	},
];

export function ProblemList() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
			{problems.map((problem, index) => (
				<ProblemCard
					key={problem.title}
					icon={problem.icon}
					title={problem.title}
					description={problem.description}
					index={index}
				/>
			))}
		</div>
	);
}
