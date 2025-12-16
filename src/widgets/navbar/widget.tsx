import type { ReactNode } from "react";
import { navigationItems } from "./items";

export function AppNav({ children }: { children: ReactNode }) {
	return (
		<header className="bg-background/60 backdrop-blur sticky top-0 z-50 w-full">
			<div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6">
				<div className="text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16">
					{navigationItems.map((item) => (
						<a
							href={item.href}
							key={item.title}
							className="hover:text-primary max-md:hidden"
						>
							{item.title}
						</a>
					))}
				</div>
				{children}
			</div>
		</header>
	);
}
