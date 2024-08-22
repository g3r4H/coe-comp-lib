// vite.config.js
import {resolve} from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CoeCompLib',
      // the proper extensions will be added
      fileName: format => `coe-comp-lib.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: /^lit/,
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          lit: 'Lit',
        },
      },
    },
    outDir: resolve(__dirname, 'lib'),
  },
});
