"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function HeroSectionOne() {
	return (
		<div className="relative flex min-h-screen flex-col items-center justify-center">
			<div className="px-4 py-24">
				<h1 className="relative z-10 mx-auto max-w-4xl text-foreground text-center text-2xl font-bold md:text-4xl lg:text-7xl">
					{"Launch your website in hours, not days"
						.split(" ")
						.map((word, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
								animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
								transition={{
									duration: 0.3,
									delay: index * 0.1,
									ease: "easeInOut",
								}}
								className="mr-2 inline-block"
							>
								{word}
							</motion.span>
						))}
				</h1>
				<motion.p
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{
						duration: 0.3,
						delay: 0.8,
					}}
					className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
				>
					With AI, you can launch your website in hours, not days. Try our best
					in class, state of the art, cutting edge AI tools to get your website
					up.
				</motion.p>
				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{
						duration: 0.3,
						delay: 1,
					}}
					className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
				>
					<Button size="lg">Explore Now</Button>
					<Button variant="outline" size="lg">
						Contact Support
					</Button>
				</motion.div>
			</div>
		</div>
	);
}
