import { browsers } from '@gossi/config-targets';

function plugins({ minify }) {
  return [
    // https://github.com/postcss/postcss-nested
    // Nest rules and reference the parent via &
    require('postcss-nested'),

    // https://github.com/limitlessloop/postcss-pow
    // Adds pow() function
    require('postcss-pow'),

    // https://www.npmjs.com/package/postcss-each
    // adds @each construct
    require('postcss-each'),

    // https://github.com/csstools/postcss-preset-env
    // Adds vendor prefixes based on Can I Use and polyfills new features
    // Inspired by https://github.com/moxystudio/postcss-preset-moxy/blob/master/index.js
    require('postcss-preset-env')({
      browsers,

      // https://cssdb.org/
      stage: 2,

      features: {
        'custom-selectors': true
      },

      // Disable `preserve` so that the resulting CSS is consistent among all
      // browsers, diminishing the probability of discovering bugs only when
      // testing in older browsers.
      preserve: false,

      // Explicitly enable features that we want, despite being proposals yet.
      // features: {
      //   'custom-properties': true,
      //   'custom-media-queries': true,
      //   'nesting-rules': true,
      //   'pseudo-class-any-link': true
      // },

      autoprefixer: {
        // We don't manually apply prefixes unless they are really necessary,
        // e.g.when dealing with quirks, therefore we disable removing them.
        remove: false
      }
    }),
    require('postcss-parcel-css')({
      minify
    })
  ];
}

export {
  // example for custom module resolving resolving algorithm
  // rollup(options) {
  //   return {
  //     autoModules: false,
  //     modules: {
  //       resolve(file) {
  //         if (file.startsWith('@gossi')) {
  //           const parts = file.split('/');
  //           const packageName = `${parts.shift()}/${parts.shift()}`;
  //           const path = `${cwd}/node_modules/${packageName}/src/${parts.join('/')}`;

  //           return path;
  //         }

  //         return file;
  //       }
  //     },
  //     // namedExports: true,
  //     extract: 'styles.css',
  //     plugins: plugins(options)
  //   };
  // },
  plugins
};
