import { Locales, PATH_PREFIXES, type Locale } from '$lib/utils/locale';
import { error } from '@sveltejs/kit';
import { derived, writable } from 'svelte/store';

export const locale = writable<Locale>(Locales[0]);

export const localePath = derived(
	locale,
	($locale) =>
		function (path: string, locale?: Locale): string {
			if (locale === undefined) {
				locale = $locale;
			}
			for (const loc of Locales) {
				const prefix = PATH_PREFIXES[loc];
				if (path.startsWith(prefix + '/') || path == prefix) {
					path = path.slice(prefix.length);
					break;
				}
			}
			path = PATH_PREFIXES[locale] + path;
			return path;
		}
);

export function setLocale(lang: Locale) {
	if (!Locales.includes(lang)) {
		throw error(404);
	}
	locale.set(lang);
}
