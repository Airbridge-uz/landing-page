import { MapPin, MessageCircle, Plane } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

// --- Types ---

type Step = {
	id: number;
	title: string;
	description: string;
	icon: React.ReactNode;
};

const steps: Step[] = [
	{
		id: 1,
		title: "Tell us what you want",
		description: "Destination, budget, dates, travel style",
		icon: <MapPin className="w-6 h-6" />,
	},
	{
		id: 2,
		title: "Chat & refine",
		description: "Ask questions, change preferences, explore options",
		icon: <MessageCircle className="w-6 h-6" />,
	},
	{
		id: 3,
		title: "Get a ready-to-go plan",
		description: "Flights, stays, activities, itinerary",
		icon: <Plane className="w-6 h-6" />,
	},
];

const Timeline = () => {
	return (
		<div className="relative max-w-4xl mx-auto">
			<div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0" />

			<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
				{steps.map((step, index) => (
					<motion.div
						key={step.id}
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: index * 0.3 }}
						viewport={{ once: true }}
						className="flex flex-col items-center text-center"
					>
						<div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(var(--primary),0.3)] dark:bg-primary">
							<span className="font-bold text-primary dark:text-foreground">
								{index + 1}
							</span>
						</div>

						<div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 min-h-[160px] flex flex-col items-center justify-center gap-3 w-full group hover:border-primary/50 transition-colors">
							<div className="text-foreground/80 group-hover:text-primary transition-colors dark:group-hover:text-foreground/80">
								{step.icon}
							</div>
							<h3 className="text-lg font-semibold">{step.title}</h3>
							<p className="text-sm text-muted-foreground">
								{step.description}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

// --- Main Component ---

export default function HowItWorksWidget() {
	return (
		<div className="min-h-[400px]">
			<AnimatePresence mode="wait">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.3 }}
				>
					<Timeline />
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
