// Shared client-side i18n utilities (no async fetch)

export const languages = {
	en: "English",
	uz: "O'zbekcha",
	ru: "Русский",
} as const;

export type Language = keyof typeof languages;
export const defaultLang: Language = "en";
