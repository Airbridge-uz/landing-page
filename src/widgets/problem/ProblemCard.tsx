"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProblemCardProps {
	icon: LucideIcon;
	title: string;
	description: string;
	index: number;
}

export function ProblemCard({
	icon: Icon,
	title,
	description,
	index,
}: ProblemCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{
				duration: 0.5,
				delay: index * 0.15,
				ease: [0.21, 0.47, 0.32, 0.98],
			}}
			whileHover={{
				y: -4,
				transition: { duration: 0.2 },
			}}
			className="h-full"
		>
			<Card className="group relative h-full overflow-hidden border-border/40 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20 dark:bg-zinc-950/50">
				{/* Subtle Glow Effect on Hover */}
				<div className="absolute -inset-px bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

				<CardHeader className="relative space-y-4 pb-3">
					<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
						<Icon className="h-6 w-6" strokeWidth={1.5} />
					</div>
					<CardTitle className="text-xl font-bold tracking-tight text-foreground transition-colors duration-300">
						{title}
					</CardTitle>
				</CardHeader>
				<CardContent className="relative">
					<p className="text-[15px] leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
						{description}
					</p>
				</CardContent>
			</Card>
		</motion.div>
	);
}
