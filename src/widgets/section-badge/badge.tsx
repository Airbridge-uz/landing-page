import type { ReactNode } from "react";

export function SectionBadge({ children }: { children: ReactNode }) {
	return (
		<div className="flex justify-center mb-6">
			<span className="bg-foreground text-background border border-border rounded-full px-3 py-1 text-xs font-medium flex items-center gap-2">
				{children}
			</span>
		</div>
	);
}
