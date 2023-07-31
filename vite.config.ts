import {defineConfig, PluginOption} from 'vite';
import vue from '@vitejs/plugin-vue';
import {visualizer} from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		visualizer({
			template: 'treemap', // or sunburst
			open: true,
			gzipSize: true,
			brotliSize: true,
			filename: 'analyse.html', // will be saved in project's root
		}) as PluginOption,
	],
});
