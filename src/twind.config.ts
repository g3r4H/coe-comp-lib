import { defineConfig } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from './tokens/colors.json';
import typograpghy from './tokens/typography.json';

export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  /* config */
  theme: {
    colors: {
      ...colors,
      // 60-30-10
      dominant: colors.white,
      complementary: colors.black,
      accent: colors.blue[500],
      // Statuses
      success: colors.green[500],
      danger: colors.red[500],
      warning: colors.yellow[500],
      // Extras
      secondary: colors.lime[500],
      disabled: colors.gray[200],
    },
    extend: {
      fontFamily: {
        sans: [typograpghy.family, ...defaultTheme.fontFamily.sans],
      },
    }
  },
});
