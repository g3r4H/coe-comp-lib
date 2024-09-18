import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './nav-menu';
import { INavMenu } from './nav-menu';

const meta: Meta<INavMenu> = {
  title: 'Components/NavMenu',
  component: 'coe-nav-menu',
  argTypes: {
    items: {
      control: 'object',
      description: 'The items dislayed by the nav menu',
    },
  },
};

export default meta;

const Template = (args: INavMenu) =>
  html`
    <div class="w-[200px]">
      <coe-nav-menu .items="${args.items}"></coe-nav-menu>
    </div>
  `;

export const Default: StoryObj<INavMenu> = {
  render: Template,
  args: {
    items: [
      { text: 'Nav Item 1' },
      { text: 'Nav Item 2' },
      { text: 'Nav Item 3' },
      { text: 'Nav Item 4' },
    ],
  },
};
