import { fileURLToPath } from 'url';

import { defineConfig, loadEnv } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { quasar as Quasar, transformAssetUrls } from '@quasar/vite-plugin';
import Eslint from 'vite-plugin-eslint';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import SvgLoader from 'vite-svg-loader';
import Legacy from '@vitejs/plugin-legacy';
import Inspect from 'vite-plugin-inspect';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.');

  return {
    base: env.VITE_BASE_PUBLIC_PATH ?? '/',
    plugins: [
      Vue({
        template: { transformAssetUrls }
      }),
      Quasar({
        autoImportComponentCase: 'pascal',
        sassVariables: false
      }),
      Eslint({
        cache: false,
        exclude: ['dist']
      }),
      Pages({
        extensions: ['vue'],
        pagesDir: [{ dir: 'src/modules/**/pages', baseRoute: '' }]
      }),
      Layouts({
        defaultLayout: 'Default.layout',
        layoutsDirs: 'src/shared/layouts'
      }),
      SvgLoader(),
      Legacy({
        targets: [
          '> 1%',
          'last 2 versions',
          'not dead',
          'chrome >= 77',
          'safari >= 13',
          'ios_saf >= 13'
        ]
      }),
      Inspect({
        // change this to enable inspect for debugging
        enabled: false
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
            // 同 modules 內的檔案打包成同一個 chunk，
            // 例如：src/modules/users 目錄內的檔案都被打包至 `users` chunk
            const matched = id.match(/src\/modules\/(?<module>[^/]+?)\//);
            const matchedModule = matched?.groups.module;
            if (matchedModule) return matchedModule;
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
  };
});
