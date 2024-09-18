import type { Preview } from '@storybook/web-components';
import { setup } from '@twind/core';
import tailwindConfig from '../src/twind.config';

setup(tailwindConfig);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
