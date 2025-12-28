"use client";

import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type Language, languages } from "@/i18n/constants";

interface LanguageSwitcherProps {
	currentLang: Language;
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
	const handleLanguageChange = (lang: Language) => {
		// Get current path and replace language prefix
		const currentPath = window.location.pathname;
		const pathWithoutLang = currentPath.replace(/^\/(en|uz|ru)/, "");
		const newPath = `/${lang}${pathWithoutLang || "/"}`;
		window.location.href = newPath;
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" className="h-9 w-9">
					<Globe className="h-4 w-4" />
					<span className="sr-only">Switch language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{Object.entries(languages).map(([code, name]) => (
					<DropdownMenuItem
						key={code}
						onClick={() => handleLanguageChange(code as Language)}
						className={currentLang === code ? "bg-accent" : ""}
					>
						{name}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
