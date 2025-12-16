import {
	Activity,
	BarChart,
	CreditCard,
	Key,
	Layout,
	Users,
	Zap,
} from "lucide-react";
import { AppLogo } from "../logo/widget";

export function FeaturesWidget() {
	return (
		<section className="py-24 overflow-hidden">
			<div className="container mx-auto relative z-10">
				{/* Header */}
				<div className="text-center max-w-3xl mx-auto mb-20">
					<div className="flex justify-center mb-6">
						<span className="bg-zinc-800 border border-zinc-700 rounded-full px-3 py-1 text-xs font-medium text-zinc-300">
							Our Features
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
						Offer your clients a better retainer experience, scale your agency
					</h2>
					<p className="text-xl text-zinc-400">
						Using technology to make finance simpler, smarter and more
						rewarding.
					</p>
				</div>

				{/* Diagram Section */}
				<div className="hidden md:block ml-2">
					{/* Main Flex Loop: Items stretch to match height of tallest element (Side Columns) */}
					<div className="flex justify-between items-stretch relative w-full">
						{/* Left Column (Stripe, Filament) */}
						<div className="flex flex-col gap-24 relative justify-center">
							{/* Left Bracket Connector */}
							<div className="absolute -right-8 top-1/2 -translate-y-1/2 w-8 h-[calc(100%-3rem)] rounded-l-none border-t border-b border-r border-zinc-700 pointer-events-none" />

							<div className="flex items-center gap-3 border px-4 py-2 rounded-lg shadow-sm z-10 relative">
								<div className="bg-indigo-600 p-1 rounded text-white">
									<CreditCard size={16} />
								</div>
								<span className="font-semibold text-sm">Stripe</span>
							</div>
							<div className="flex items-center gap-3 border px-4 py-2 rounded-lg shadow-sm z-10 relative">
								<div className="bg-orange-600 p-1 rounded text-white">
									<Activity size={16} />
								</div>
								<span className="font-semibold text-sm">Filament</span>
							</div>
						</div>

						{/* Left Horizontal Connector - Responsive flex spacer */}
						{/* Use self-center to align horizontally in the middle of the stretched container */}
						<div className="flex-1 h-px bg-foreground relative ml-8 self-center"></div>

						{/* Center Column (Shadcn) */}
						{/* Use flex-1 spacers to perfectly center the pill and draw line to bottom */}
						<div className="flex flex-col items-center justify-between relative">
							<div className="flex-1 w-px"></div> {/* Invisible Top Spacer */}
							<AppLogo />
							{/* Visible Bottom Spacer - Draws line to bottom edge of container */}
							<div className="flex-1 w-px bg-foreground relative -z-10"></div>
						</div>

						{/* Right Horizontal Connector - Responsive flex spacer */}
						<div className="flex-1 h-px bg-foreground relative mr-8 self-center"></div>

						{/* Right Column (Supabase, UserAuth) */}
						<div className="flex flex-col gap-24 relative justify-center">
							{/* Right Bracket Connector */}
							<div className="absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-[calc(100%-3rem)] rounded-r-none border-t border-b border-l border-zinc-700 pointer-events-none" />

							<div className="flex items-center gap-3 border px-4 py-2 rounded-lg shadow-sm z-10 relative">
								<div className="bg-emerald-600 p-1 rounded text-white">
									<Zap size={16} />
								</div>
								<span className="font-semibold text-sm">Supabase</span>
							</div>
							<div className="flex items-center gap-3 border px-4 py-2 rounded-lg shadow-sm z-10 relative">
								<div className="bg-sky-600 p-1 rounded text-white">
									<Key size={16} />
								</div>
								<span className="font-semibold text-sm">UserAuth</span>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Connectors (Fork to Cards) */}
				{/* Overlap top margin slightly to ensure visual connection with the center column line */}
				<div
					className="max-w-5xl mx-auto h-16 pt-8 relative hidden md:block -mt-px"
					aria-hidden="true"
				>
					{/* Vertical Connector in Fork Section - Bridges any remaining gap? 
                        We don't need it if the top line reached the bottom.
                        We just need the fork structure.
                     */}
					{/* Central Vertical Line Segment - From top to Horizontal Bar */}
					<div className="absolute left-1/2 -translate-x-1/2 top-0 h-16 w-px bg-foreground"></div>

					{/* Horizontal Bar */}
					<div className="absolute left-[16.666%] right-[16.666%] h-px bg-foreground"></div>

					{/* 3 Forks down from the horizontal bar */}
					{/* Left Fork */}
					<div className="absolute left-[16.666%] top-8 bottom-0 w-px bg-foreground"></div>
					{/* Center Fork */}
					<div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-px bg-foreground"></div>
					{/* Right Fork */}
					<div className="absolute right-[16.666%] top-8 bottom-0 w-px bg-foreground"></div>
				</div>

				{/* Cards Section */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
					{/* Card 1 */}
					<div className="border rounded-xl overflow-hidden transition-colors">
						<div className="p-6">
							<div className="flex items-center gap-2 mb-3">
								<BarChart size={18} />
								<h3 className="font-semibold">Usage Transparency</h3>
							</div>
							<p className="text-sm mb-6">
								Protect your sensitive information with advanced security
								measures.
							</p>
						</div>
						{/* Visual */}
						<div className="px-6 pb-6">
							<div className="rounded-lg p-4 relative overflow-hidden h-[160px]">
								<div className="absolute top-4 left-4 text-xs font-bold px-2 py-1 rounded shadow">
									Available Hours
									<div className="text-2xl mt-1">
										130
										<span className="text-xs font-normal">hr</span>
									</div>
									<div className="text-[10px] font-normal">
										10 Days left for the project
									</div>
								</div>
								{/* Progress Bars Mockup */}
								<div className="absolute bottom-4 left-4 right-4  p-3 rounded-md shadow-lg">
									<div className="text-[10px] font-bold mb-2">Hours</div>
									<div className="flex h-1.5 w-full rounded-full overflow-hidden mb-2">
										<div className="bg-indigo-500 w-[30%]"></div>
										<div className="bg-orange-400 w-[20%]"></div>
										<div className="bg-blue-400 w-[30%]"></div>
										<div className="bg-zinc-200 w-[20%]"></div>
									</div>
									<div className="flex justify-between text-[10px]">
										<div>
											<b className="text-black">8</b> Spent
										</div>
										<div>
											<b className="text-black">15</b> Projected
										</div>
										<div>
											<b className="text-black">23</b> Available
										</div>
										<div>
											<b className="text-black">12</b> Remaining
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Card 2 */}
					<div className="border rounded-xl overflow-hidden transition-colors">
						<div className="p-6">
							<div className="flex items-center gap-2 mb-3">
								<Users size={18} />
								<h3 className="font-semibold">Client-facing Portal</h3>
							</div>
							<p className="text-sm mb-6">
								Protect your sensitive information with advanced security
								measures.
							</p>
						</div>
						{/* Visual */}
						<div className="h-[200px] relative mt-[-20px] pt-10 px-6">
							<div className="p-4 rounded-xl shadow-2xl border relative top-4">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
										<img
											src="https://github.com/shadcn.png"
											alt="Avatar"
											className="w-full h-full object-cover grayscale"
										/>
									</div>
									<div>
										<div className="font-bold text-sm">Steve Rogers</div>
										<div className="text-xs">Today, 11:56</div>
									</div>
									<div className="ml-auto font-mono text-lg">$49</div>
								</div>
							</div>
							{/* Stacked card effect */}
							<div className="absolute top-2 left-8 right-8 h-4 rounded-t-xl -z-10"></div>
						</div>
					</div>

					{/* Card 3 */}
					<div className="border rounded-xl overflow-hidden transition-colors">
						<div className="p-6">
							<div className="flex items-center gap-2 mb-3">
								<Layout size={18} />
								<h3 className="font-semibold">Task Collaboration</h3>
							</div>
							<p className="text-sm mb-6">
								Protect your sensitive information with advanced security
								measures.
							</p>
						</div>
						{/* Visual */}
						<div className="h-[200px] relative mt-[-20px] pt-10 px-6 flex items-center justify-center">
							<div className="flex -space-x-3">
								{[1, 2, 3, 4, 5].map((i) => (
									<div
										key={i}
										className="w-12 h-12 rounded-full border-2 overflow-hidden"
									>
										<img
											src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
											alt="avatar"
											className="w-full h-full"
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
