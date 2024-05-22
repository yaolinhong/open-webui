import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import legacy from "@vitejs/plugin-legacy";

// /** @type {import('vite').Plugin} */
// const viteServerConfig = {
// 	name: 'log-request-middleware',
// 	configureServer(server) {
// 		server.middlewares.use((req, res, next) => {
// 			res.setHeader('Access-Control-Allow-Origin', '*');
// 			res.setHeader('Access-Control-Allow-Methods', 'GET');
// 			res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
// 			res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
// 			next();
// 		});
// 	}
// };

export default defineConfig({
	plugins: [
		sveltekit(),
		legacy({
			modernPolyfills: true,
			renderLegacyChunks: false,
			targets: ['chrome 86', 'safari 13', 'firefox 78', 'edge 86'],
		})
	],
	define: {
		APP_VERSION: JSON.stringify(process.env.npm_package_version)
	},
	worker: {
		format: 'es'
	}
});
