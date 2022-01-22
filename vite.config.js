import { fileURLToPath } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import eslint from 'vite-plugin-eslint';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      autoImportComponentCase: 'pascal',
      sassVariables: false
    }),
    eslint({
      cache: false,
      exclude: ['dist']
    }),
    Pages({
      extensions: ['vue'],
      dirs: [
        { dir: 'src/modules/root/pages', baseRoute: '' },
        { dir: 'src/modules/about/pages', baseRoute: '' },
        { dir: 'src/modules/tran/pages', baseRoute: 'tran' },
        { dir: 'src/modules/work/pages', baseRoute: 'work' }
      ]
    }),
    Layouts({
      defaultLayout: 'Default.layout',
      layoutsDir: 'src/shared/layouts'
    }),
    legacy({
      targets: [
        '> 1%',
        'last 2 versions',
        'not dead',
        'chrome >= 77',
        'safari >= 13',
        'ios_saf >= 13'
      ]
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
  },
  build: {
    rollupOptions: {
      output: {
        // https://rollupjs.org/guide/en/#outputmanualchunks
        manualChunks(id) {
          if (id.includes('src/modules/tran')) return 'tran';
          if (id.includes('src/modules/work')) return 'work';
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
});
