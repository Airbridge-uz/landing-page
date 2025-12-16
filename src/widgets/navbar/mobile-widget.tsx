import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigationItems } from "./items";

export function MobileNavbar() {
	return (
		<div className="flex items-center gap-6">
			<DropdownMenu>
				<DropdownMenuTrigger className="md:hidden" asChild>
					<Button variant="outline" size="icon">
						<MenuIcon />
						<span className="sr-only">Menu</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56" align="end">
					<DropdownMenuGroup>
						{navigationItems.map((item, index) => (
							<DropdownMenuItem key={index}>
								<a href={item.href}>{item.title}</a>
							</DropdownMenuItem>
						))}
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
