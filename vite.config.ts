import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { visualizer } from "rollup-plugin-visualizer";
import compression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [
        checker({ typescript: true }),
        visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
        }),
        compression({
            algorithm: 'gzip',
            ext: '.gz',
        }),
        compression({
            algorithm: 'brotliCompress',
            ext: '.br',
        })
    ],
});