import { Questions } from "./questions";

export function FAQ() {
	return (
		<section id="faq" className="py-8 sm:py-16 lg:py-24 w-full">
			<div className="mx-auto container px-4 sm:px-6 lg:px-8">
				<div className="flex justify-center mb-6">
					<span className="bg-foreground text-background border border-border rounded-full px-3 py-2 text-xs font-medium flex items-center gap-2">
						<span className="material-symbols-outlined">FAQ</span>
					</span>
				</div>
				{/* FAQ Header */}
				<div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
					<h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground">
						Need Help? We&apos;ve Got Answers
					</h2>
					<p className="text-muted-foreground text-xl">
						Explore Our Most Commonly Asked Questions and Find the Information
						You Need.
					</p>
				</div>

				<Questions />
			</div>
		</section>
	);
}
