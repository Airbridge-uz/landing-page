import { Brain, Clock, MessageSquare, Sparkles, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// --- Data ---

const messages = [
	{ id: "m1", text: "I like quiet places, not touristy", sender: "user" },
	{ id: "m2", text: "Make it more budget-friendly", sender: "user" },
	{ id: "m3", text: "Add halal food options", sender: "user" },
];

const benefits = [
	{
		id: "b1",
		title: "Understands context",
		icon: <Brain className="w-5 h-5" />,
		description:
			"It knows you mean 'quiet' refers to the atmosphere, not just noise level.",
	},
	{
		id: "b2",
		title: "Remembers preferences",
		icon: <Clock className="w-5 h-5" />,
		description:
			"No need to repeat yourself. It recalls your budget and dietary needs.",
	},
	{
		id: "b3",
		title: "Adapts instantly",
		icon: <Zap className="w-5 h-5" />,
		description: "Change plans on the fly. The itinerary updates in real-time.",
	},
];

type Variant =
	| "chat-mockup"
	| "floating-bubbles"
	| "feature-cards"
	| "split-view"
	| "minimal-typewriter";

// --- Components ---

const ChatBubble = ({ text, delay = 0 }: { text: string; delay?: number }) => (
	<motion.div
		initial={{ opacity: 0, y: 10, scale: 0.95 }}
		whileInView={{ opacity: 1, y: 0, scale: 1 }}
		viewport={{ once: true }}
		transition={{ duration: 0.4, delay }}
		className="bg-primary/10 text-foreground px-4 py-3 rounded-2xl rounded-tr-sm border border-primary/20 backdrop-blur-sm self-end max-w-[80%]"
	>
		<p className="text-sm font-medium">{text}</p>
	</motion.div>
);

const BenefitItem = ({
	benefit,
	index,
}: {
	benefit: (typeof benefits)[number];
	index: number;
}) => (
	<motion.div
		initial={{ opacity: 0, x: -20 }}
		whileInView={{ opacity: 1, x: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
		className="flex items-start gap-4"
	>
		<div className="p-2 rounded-lg bg-secondary/50 text-primary ring-1 ring-border">
			{benefit.icon}
		</div>
		<div>
			<h4 className="text-base font-semibold text-foreground">
				{benefit.title}
			</h4>
			<p className="text-sm text-muted-foreground">{benefit.description}</p>
		</div>
	</motion.div>
);

// --- Variants ---

// Variant 1: Chat Mockup (Phone style)
const ChatMockupVariant = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
			<div className="flex-1 space-y-8">
				<h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
					Just like talking to a friend
				</h3>
				<div className="space-y-6">
					{benefits.map((b, i) => (
						<BenefitItem key={b.id} benefit={b} index={i} />
					))}
				</div>
			</div>

			<div className="relative w-[300px] h-[600px] bg-background border-4 border-muted rounded-[3rem] shadow-2xl overflow-hidden ring-8 ring-black/50">
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background/95 to-background/90" />

				{/* Header Mockup */}
				<div className="absolute top-0 left-0 w-full p-6 bg-background/80 backdrop-blur border-b border-border z-10 flex items-center gap-3 pt-12">
					<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
						<Sparkles className="w-4 h-4" />
					</div>
					<div>
						<div className="text-sm font-semibold">SkySearch AI</div>
						<div className="text-[10px] text-muted-foreground flex items-center gap-1">
							<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />{" "}
							Online
						</div>
					</div>
				</div>

				<div className="absolute inset-0 pt-32 px-4 pb-24 overflow-hidden flex flex-col gap-4">
					<motion.div
						initial={{ opacity: 0, x: -10 }}
						whileInView={{ opacity: 1, x: 0 }}
						className="bg-muted text-muted-foreground px-4 py-3 rounded-2xl rounded-tl-sm self-start max-w-[80%] text-sm"
					>
						Where would you like to go?
					</motion.div>

					{messages.map((msg, i) => (
						<ChatBubble key={msg.id} text={msg.text} delay={0.5 + i * 0.5} />
					))}

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 2.5 }}
						className="bg-muted text-muted-foreground px-4 py-3 rounded-2xl rounded-tl-sm self-start max-w-[80%] text-sm flex gap-2 items-center"
					>
						<span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
						<span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
						<span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" />
					</motion.div>
				</div>

				{/* Input Mockup */}
				<div className="absolute bottom-0 left-0 w-full p-4 bg-background/80 backdrop-blur border-t border-border z-10">
					<div className="h-10 bg-muted/50 rounded-full w-full border border-border/50 text-xs flex items-center px-4 text-muted-foreground">
						Type a message...
					</div>
					<div className="w-1/3 h-1 bg-foreground/20 mx-auto mt-4 rounded-full" />
				</div>
			</div>
		</div>
	);
};

// Variant 2: Floating Bubbles (Center focus)
const FloatingBubblesVariant = () => {
	return (
		<div className="relative py-12 max-w-4xl mx-auto text-center">
			<div className="relative h-[400px] flex items-center justify-center mb-12">
				<div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-full blur-3xl opacity-30" />

				{messages.map((msg, i) => (
					<motion.div
						key={msg.id}
						className="absolute"
						initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
						whileInView={{
							opacity: 1,
							scale: 1,
							x: i === 0 ? -120 : i === 1 ? 190 : -80,
							y: i === 0 ? -80 : i === 1 ? -30 : 100,
						}}
						transition={{ duration: 0.6, delay: i * 0.2 }}
					>
						<div className="bg-background/80 backdrop-blur-md border border-primary/20 px-6 py-4 rounded-full shadow-[0_8px_32px_-4px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform cursor-default">
							<p className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
								“{msg.text}”
							</p>
						</div>
					</motion.div>
				))}

				<div className="z-10 flex flex-col items-center gap-4">
					<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/25">
						<MessageSquare className="w-10 h-10 text-white" />
					</div>
					<h3 className="text-2xl font-bold">Natural Language</h3>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
				{benefits.map((b) => (
					<div
						key={b.id}
						className="p-6 rounded-xl bg-card/30 border border-border/50 hover:bg-card/50 transition-colors"
					>
						<div className="mb-4 text-primary">{b.icon}</div>
						<h4 className="font-semibold mb-2">{b.title}</h4>
						<p className="text-sm text-muted-foreground">{b.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

// Variant 3: Split View (Text | Visual)
const SplitViewVariant = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
			<div className="space-y-8 order-2 md:order-1">
				<div className="space-y-4">
					<h3 className="text-4xl font-bold tracking-tight">
						Speak naturally. <br /> Be understood.
					</h3>
					<p className="text-lg text-muted-foreground">
						Don't waste time with filters. Just describe your dream trip, and
						let our AI handle the rest.
					</p>
				</div>

				<div className="grid gap-6">
					{benefits.map((b) => (
						<div key={b.id} className="flex gap-4">
							<div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary h-fit">
								{b.icon}
							</div>
							<div>
								<h4 className="font-medium text-foreground">{b.title}</h4>
								<p className="text-muted-foreground/80">{b.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="relative order-1 md:order-2">
				<div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent rounded-[2rem] blur-xl" />
				<div className="relative bg-card/30 backdrop-blur-xl border border-white/10 p-8 rounded-3xl space-y-6 shadow-2xl">
					<div className="flex items-center justify-between border-b border-white/5 pb-4">
						<div className="flex items-center gap-3">
							<div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
								<Sparkles className="w-4 h-4" />
							</div>
							<div>
								<div className="text-sm font-semibold">SkySearch Assistant</div>
								<div className="text-[10px] text-muted-foreground flex items-center gap-1.5">
									<span className="relative flex h-2 w-2">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
										<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
									</span>
									Online
								</div>
							</div>
						</div>
						<div className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
							BETA
						</div>
					</div>

					<div className="space-y-6">
						{/* AI Greeting */}
						<div className="flex gap-4">
							<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
								<Brain className="w-4 h-4 text-primary" />
							</div>
							<div className="p-4 rounded-2xl rounded-tl-sm bg-secondary/40 border border-white/5 text-sm">
								<p>Hi! Where are you dreaming of going next?</p>
							</div>
						</div>

						{/* User Requirements */}
						<div className="space-y-3">
							{messages.map((msg, i) => (
								<motion.div
									key={msg.id}
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: i * 0.3 }}
									className="flex gap-4 flex-row-reverse"
								>
									<div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 overflow-hidden">
										<img
											src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
											alt="User"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="p-3 px-4 rounded-2xl rounded-tr-sm bg-primary/90 text-primary-foreground text-sm shadow-sm max-w-[80%]">
										{msg.text}
									</div>
								</motion.div>
							))}
						</div>

						{/* Processing Indicator */}
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 1.5 }}
							className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10"
						>
							<div className="flex gap-1 h-3 items-center">
								<motion.div
									animate={{ height: [4, 12, 4] }}
									transition={{ repeat: Infinity, duration: 1 }}
									className="w-1 bg-primary rounded-full"
								/>
								<motion.div
									animate={{ height: [4, 12, 4] }}
									transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
									className="w-1 bg-primary rounded-full"
								/>
								<motion.div
									animate={{ height: [4, 12, 4] }}
									transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
									className="w-1 bg-primary rounded-full"
								/>
							</div>
							<span className="text-xs text-muted-foreground font-medium">
								Generating your personal itinerary...
							</span>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

// Variant 4: Interactive Typing (Minimal)
const MinimalTypewriterVariant = () => {
	return (
		<div className="max-w-4xl mx-auto">
			<div className="bg-card/30 border border-border backdrop-blur rounded-[2rem] p-12 text-center md:h-[400px] flex flex-col items-center justify-center relative overflow-hidden group">
				<div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black,transparent)]" />

				<div className="relative z-10 space-y-8">
					<div className="inline-flex flex-col items-center">
						<span className="text-sm text-muted-foreground mb-4 uppercase tracking-widest">
							You ask
						</span>
						<div className="text-3xl md:text-5xl font-bold text-foreground">
							"Make it{" "}
							<span className="text-primary italic">budget-friendly</span>"
						</div>
					</div>

					<div className="h-px w-24 bg-border mx-auto" />

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
						{benefits.map((b) => (
							<div
								key={b.id}
								className="text-center group-hover:translate-y-[-5px] transition-transform duration-300"
							>
								<div className="mx-auto w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-3">
									{b.icon}
								</div>
								<div className="text-sm font-semibold">{b.title}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

// Variant 5: Feature Cards Grid
const FeatureCardsVariant = () => {
	return (
		<div className="max-w-5xl mx-auto">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
				{/* Large Card - The Chat */}
				<div className="lg:col-span-7 bg-secondary/20 border border-border/50 rounded-3xl p-8 flex flex-col justify-between min-h-[400px]">
					<div>
						<h3 className="text-2xl font-bold mb-6">
							Conversational Interface
						</h3>
						<div className="space-y-4 pr-12">
							{messages.map((msg, i) => (
								<motion.div
									key={msg.id}
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.2 }}
									className="bg-background border border-border/50 p-4 rounded-2xl rounded-tl-sm w-fit"
								>
									{msg.text}
								</motion.div>
							))}
						</div>
					</div>
				</div>

				{/* Smaller Cards - Benefits */}
				<div className="lg:col-span-5 flex flex-col gap-6">
					{benefits.map((b, i) => (
						<motion.div
							key={b.id}
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 + i * 0.1 }}
							className="bg-card/40 border border-border/50 p-6 rounded-3xl flex items-center gap-4 flex-1"
						>
							<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
								{b.icon}
							</div>
							<div>
								<h4 className="font-semibold">{b.title}</h4>
								<p className="text-sm text-muted-foreground leading-tight mt-1">
									{b.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

// --- Main Switcher ---

export default function ChatExperienceWidget() {
	const [variant, setVariant] = useState<Variant>("chat-mockup");

	return (
		<section className="py-24 relative">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col items-center mb-16 space-y-4 text-center">
					<div className="bg-foreground text-background border border-border rounded-full px-3 py-1 text-xs font-medium flex items-center gap-2">
						<MessageSquare className="w-3 h-3" />
						Conversational UI
					</div>
					<h2 className="text-3xl md:text-5xl font-bold text-foreground">
						Your Personal AI Travel Assistant
					</h2>

					{/* Switcher */}
					<div className="flex items-center gap-2 p-1 bg-secondary/50 rounded-lg border border-border backdrop-blur-sm mt-8">
						<span className="px-3 text-xs font-medium text-muted-foreground">
							VARIANT:
						</span>
						<select
							value={variant}
							onChange={(e) => setVariant(e.target.value as Variant)}
							className="bg-transparent border-none text-sm font-medium focus:ring-0 cursor-pointer text-foreground py-1 pr-8"
						>
							<option
								className="bg-background text-foreground"
								value="chat-mockup"
							>
								1. Phone Mockup
							</option>
							<option
								className="bg-background text-foreground"
								value="split-view"
							>
								2. Split View Dashboard
							</option>
							<option
								className="bg-background text-foreground"
								value="floating-bubbles"
							>
								3. Floating Bubbles
							</option>
							<option
								className="bg-background text-foreground"
								value="minimal-typewriter"
							>
								4. Minimal Typewriter
							</option>
							<option
								className="bg-background text-foreground"
								value="feature-cards"
							>
								5. Bento Feature Cards
							</option>
						</select>
					</div>
				</div>

				<div className="min-h-[500px]">
					<AnimatePresence mode="wait">
						<motion.div
							key={variant}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
						>
							{variant === "chat-mockup" && <ChatMockupVariant />}
							{variant === "split-view" && <SplitViewVariant />}
							{variant === "floating-bubbles" && <FloatingBubblesVariant />}
							{variant === "minimal-typewriter" && <MinimalTypewriterVariant />}
							{variant === "feature-cards" && <FeatureCardsVariant />}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
