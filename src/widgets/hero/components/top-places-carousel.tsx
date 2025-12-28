"use client";

import { Star } from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

interface Place {
	title: string;
	duration: string;
	rating: number;
	image: string;
}

interface TopPlacesCarouselProps {
	places: Place[];
}

export const TopPlacesCarousel = ({ places }: TopPlacesCarouselProps) => {
	return (
		<div className="w-[80vw] mx-auto md:w-full md:mx-0">
			<InfiniteMovingCards
				items={places}
				speed="normal"
				renderItem={(place) => (
					<div className="group cursor-pointer hover:bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl p-3 transition-all mx-2 bg-background">
						<div className="flex items-center gap-4">
							<div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl overflow-hidden">
								<img
									src={place.image}
									alt={place.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="flex flex-col justify-center overflow-hidden">
								<h3 className="text-foreground font-bold text-sm leading-tight truncate">
									{place.title}
								</h3>
								<p className="text-muted-foreground text-xs mt-1">
									{place.duration}
								</p>
								<div className="flex items-center gap-2 mt-2">
									<div className="flex">
										{[1, 2, 3, 4, 5].map((i) => (
											<Star
												key={i}
												className={`w-3 h-3 ${
													i <= Math.floor(place.rating)
														? "fill-yellow-500 text-yellow-500"
														: "text-muted-foreground/30"
												}`}
											/>
										))}
									</div>
									<span className="text-muted-foreground text-[10px] font-medium leading-none">
										({place.rating})
									</span>
								</div>
							</div>
						</div>
					</div>
				)}
			/>
		</div>
	);
};
