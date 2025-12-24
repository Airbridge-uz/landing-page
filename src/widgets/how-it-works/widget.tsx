import { MapPin, MessageCircle, Plane } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

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

type Variant = "vertical-stack" | "timeline";

// --- Variants ---

// Variant 1: Vertical Stack with Icons (Clean, Centered)
const VerticalStack = () => {
	return (
		<div className="flex flex-col gap-8 max-w-2xl mx-auto">
			{steps.map((step, index) => (
				<motion.div
					key={step.id}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: index * 0.2 }}
					viewport={{ once: true }}
					className="flex items-center gap-6 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
				>
					<div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
						{step.icon}
					</div>
					<div>
						<h3 className="text-xl font-semibold mb-2">{step.title}</h3>
						<p className="text-muted-foreground">{step.description}</p>
					</div>
				</motion.div>
			))}
		</div>
	);
};

// Variant 4: Timeline Flow
const Timeline = () => {
	return (
		<div className="relative max-w-4xl mx-auto">
			{/* Connecting Line (Desktop) */}
			<div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0" />

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
						<div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
							<span className="font-bold text-primary">{index + 1}</span>
						</div>

						<div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 min-h-[160px] flex flex-col items-center justify-center gap-3 w-full group hover:border-primary/50 transition-colors">
							<div className="text-foreground/80 group-hover:text-primary transition-colors">
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
	const [variant, setVariant] = useState<Variant>("vertical-stack");

	return (
		<section className="py-24 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

			<div className="container px-4 mx-auto relative z-10">
				<div className="text-center max-w-3xl mx-auto mb-16">
					{/* Badge */}
					<div className="flex justify-center mb-6">
						<span className="bg-foreground text-background border border-border rounded-full px-3 py-1 text-xs font-medium flex items-center gap-2">
							Workflow
						</span>
					</div>

					<h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
						How It Works — In 3 Simple Steps
					</h2>
					<p className="text-xl text-muted-foreground mb-8">
						“No forms. No filters. Just conversation.”
					</p>

					{/* Variant Switcher */}
					<div className="inline-flex items-center gap-3 p-1 rounded-lg bg-secondary/50 backdrop-blur-md border border-border mb-8">
						<span className="pl-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
							Preview:
						</span>
						<select
							value={variant}
							onChange={(e) => setVariant(e.target.value as Variant)}
							className="bg-transparent border-none text-sm focus:ring-0 cursor-pointer py-1 pl-2 pr-8 text-foreground"
						>
							<option className="bg-background" value="vertical-stack">
								Vertical Stack
							</option>
							<option className="bg-background" value="timeline">
								Timeline
							</option>
						</select>
					</div>
				</div>

				<div className="min-h-[400px]">
					<AnimatePresence mode="wait">
						<motion.div
							key={variant}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3 }}
						>
							{variant === "vertical-stack" && <VerticalStack />}
							{variant === "timeline" && <Timeline />}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
