import { ember, extensions, hbs } from '@embroider/vite';

import { babel } from '@rollup/plugin-babel';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    // classicEmberSupport(),
    hbs(),
    ember(),
    // extra plugins here
    babel({
      babelHelpers: 'runtime',
      extensions
    })
  ]
});
