"use client";

import { MoveRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TabData {
	id: string;
	label: string;
	title: string;
	description: string;
	image: string;
	buttonText: string;
}

const tabData: TabData[] = [
	{
		id: "story",
		label: "Our Story",
		title:
			"Our journey highlights the strength of collaboration and determination.",
		description:
			"Together, we have tackled obstacles, rejoiced in our successes, and crafted a tale of progress and achievement.",
		image:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
		buttonText: "Read More",
	},
	{
		id: "mission",
		label: "Our Mission",
		title: "We're all about creating awesome resources that help you succeed!",
		description:
			"We understand the immense importance of high-quality educational materials in fostering effective learning experiences. That's why we are deeply committed to supporting educators in their vital roles. Our mission is to provide our users with exceptional resources, comprehensive tools, and steadfast support.",
		image:
			"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
		buttonText: "Get started",
	},
	{
		id: "vision",
		label: "Our Vision",
		title: "Empowering a future where knowledge knows no bounds.",
		description:
			"We envision a world where access to quality education and resources is universal, breaking down barriers and fostering a global community of lifelong learners and innovators.",
		image:
			"https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
		buttonText: "Join us",
	},
];

export function AboutTabs() {
	const [activeTab, setActiveTab] = useState<string>("mission");

	const activeContent = tabData.find((t) => t.id === activeTab) || tabData[1];

	return (
		<div className="flex flex-col items-center">
			{/* Tab Navigation */}
			<div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-border/40 pb-4">
				{tabData.map((tab) => (
					<button
						type="button"
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={cn(
							"relative text-lg font-medium transition-colors duration-300 pb-1",
							activeTab === tab.id
								? "text-foreground"
								: "text-muted-foreground hover:text-foreground/80",
						)}
					>
						{tab.label}
						{activeTab === tab.id && (
							<motion.div
								layoutId="activeTabUnderline"
								className="absolute left-0 right-0 -bottom-[17px] h-0.5 bg-foreground"
							/>
						)}
					</button>
				))}
			</div>

			{/* Content Area */}
			<div className="w-full max-w-7xl mx-auto">
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
					>
						{/* Image Side */}
						<div className="relative group perspective-1000 order-last lg:order-first">
							<div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border aspect-4/3 bg-muted">
								<img
									src={activeContent.image}
									alt={activeContent.title}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								/>
								{/* Overlay gradient */}
								<div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent pointer-events-none" />
							</div>
						</div>

						{/* Text Side */}
						<div className="text-left space-y-6">
							<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
								{activeContent.title}
							</h3>
							<p className="text-lg text-muted-foreground leading-relaxed">
								{activeContent.description}
							</p>
							<div className="pt-4">
								<Button
									size="lg"
									className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90"
								>
									{activeContent.buttonText}
									<MoveRight className="ml-2 h-4 w-4" />
								</Button>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}
