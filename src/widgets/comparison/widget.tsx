import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
	return (
		<section className="w-full py-24 overflow-hidden relative">
			<div className="container mx-auto px-4 relative z-10">
				{/* Header Section (Consistent with Features) */}
				<div className="text-center max-w-3xl mx-auto mb-16">
					<div className="flex justify-center mb-6">
						<span className="bg-foreground text-background border border-border rounded-full px-3 py-2 text-xs font-medium flex items-center gap-2">
							Transformation
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
						Streamline your workflow from chaos to clarity
					</h2>
					<p className="text-xl text-muted-foreground">
						See how our platform transforms your daily operations instantly.
					</p>
				</div>

				{/* Comparison Card Container */}
				<div className="w-full">
					<div className="relative rounded-3xl p-1 bg-muted/20 border border-border backdrop-blur-sm">
						{/* Glow Effect Behind */}
						<div className="absolute top-0 left-1/4 right-1/4 h-32 bg-primary/20 blur-[100px] -z-10 rounded-full pointer-events-none" />

						{/* Inner Content Config */}
						<div className="rounded-[22px] overflow-hidden bg-background/40 relative">
							{/* The Compare Component */}
							<div className="">
								{" "}
								{/* Add padding for the header */}
								<Compare
									firstImage="/images/old_way_comparison.jpg"
									secondImage="/images/comparison.jpg"
									firstImageClassName="object-cover object-left-top w-full"
									secondImageClassname="object-cover object-left-top w-full"
									className="w-full h-[600px] md:h-[700px]"
									slideMode="drag"
									autoplay={false}
									showHandlebar={true}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
