import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		prerender: {
			entries: ["*", "/gaming/snes", "/gaming/pc"]
		},
		alias: {
			'app.css'      : 'src/app.css',
			'normalize.css': 'node_modules/normalize.css/normalize.css',
			'$content'     : 'src/content',
			'$layouts'     : 'src/layouts',
			'$components'  : 'src/components'
		}
	},
	extensions: ['.svelte', '.md', '.svelte.md'],
	preprocess: mdsvex({
		extensions: ['.svx', '.md', '.svelte.md']
	})
};

export default config;
