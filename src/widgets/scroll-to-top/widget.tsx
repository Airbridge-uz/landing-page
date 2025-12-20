"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, scale: 0.5, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.5, y: 20 }}
					transition={{ duration: 0.3 }}
					className="fixed bottom-8 right-8 z-50"
				>
					<Button
						variant="secondary"
						size="icon"
						onClick={scrollToTop}
						className={cn(
							"rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
							"bg-primary text-primary-foreground hover:bg-primary/90",
							"border border-border/50",
							"w-12 h-12",
						)}
						aria-label="Scroll to top"
					>
						<ArrowUp className="w-6 h-6" />
					</Button>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
