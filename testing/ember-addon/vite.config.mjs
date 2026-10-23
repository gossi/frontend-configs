import { ember, extensions } from '@embroider/vite';

import { babel } from '@rollup/plugin-babel';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '<%= name %>',
        replacement: `${import.meta.dirname}/src`
      }
    ]
  },
  plugins: [
    ember(),
    babel({
      babelHelpers: 'inline',
      extensions
    })
  ],
  build: {
    rollupOptions: {
      input: {
        tests: 'tests/index.html'
      }
    }
  }
});
