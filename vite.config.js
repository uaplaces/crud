import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/user/login.scss',
                'resources/css/admin/general.scss',
                'resources/js/app.js',
                'resources/js/admin/items.js'
            ],
            refresh: true
        }),
        vue({
            reactivityTransform: false
        })
    ],
    build: {
        //minify: false
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern'
            }
        }
    }
});
