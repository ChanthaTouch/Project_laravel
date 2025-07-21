import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [
        vue(),
        VueI18nPlugin({
            include: path.resolve(__dirname, './src/locales/**'),
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    optimizeDeps: {
        include: ['quill'],
    },
});