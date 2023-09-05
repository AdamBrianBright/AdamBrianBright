import type { Config } from 'tailwindcss';

import containerQueries from '@tailwindcss/container-queries';
import plugin from 'tailwindcss/plugin';

export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
				mono: '"Jetbrains Mono Variable", "FiraCode", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
			}
		}
	},
	plugins: [
		containerQueries,
		plugin(function ({ addVariant, matchUtilities, addUtilities, theme }) {
			addVariant('hocus', ['&:hover', '&:focus']);
			addVariant('group-hocus', ['.group:hover &', '.group:focus &']);
			// Square utility
			matchUtilities(
				{
					square: (value) => ({
						width: value,
						height: value
					})
				},
				{ values: theme('spacing') }
			);
			addUtilities({
				'.drag-none': {
					'-webkit-user-drag': 'none',
					'-khtml-user-drag': 'none',
					'-moz-user-drag': 'none',
					'-o-user-drag': 'none',
					'user-drag': 'none'
				}
			});
		})
	]
} satisfies Config;
