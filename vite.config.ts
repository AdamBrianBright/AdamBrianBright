import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [
		imagetools(),
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	],
	optimizeDeps: {
		include: ['clsx', 'tailwind-merge']
	}
});
