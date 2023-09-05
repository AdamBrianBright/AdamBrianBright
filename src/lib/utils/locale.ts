
export const Locales = ['ru', 'en'] as const;
export type Locale = (typeof Locales)[number];

export const PATH_PREFIXES: Record<Locale, string> = {
	ru: '/ru',
	en: '/en'
};
