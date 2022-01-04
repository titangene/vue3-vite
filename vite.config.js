import { fileURLToPath } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      cache: false
    }),
    Pages({
      extensions: ['vue'],
      dirs: [
        { dir: 'src/modules/root/pages', baseRoute: '' },
        { dir: 'src/modules/about/pages', baseRoute: '' }
      ]
    }),
    Layouts({
      defaultLayout: 'Default.layout',
      layoutsDir: 'src/shared/layouts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'src/styles/base/color';
          @use 'src/styles/base/typography';

          @use 'src/styles/utils/breakpoint';
        `
      }
    }
  }
});
