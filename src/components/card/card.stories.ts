import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './card';
import { ICard } from './card';

interface IStory extends ICard {
  quantity: number;
}

const meta: Meta<IStory> = {
  title: 'Components/Card',
  component: 'coe-card',
  argTypes: {
    title: {
      control: 'text',
      description: 'The text of the Card',
    },
    counter: {
      control: 'number',
      description: 'The right aligned number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    type: {
      control: 'select',
      description: 'The Type of the Card that determines its color',
      options: ['accent', 'secondary', 'success', 'danger', 'warning'],
    },
    quantity: {
      control: { type: 'number' },
      description:
        'This is just a prop available in Storybook for rendering more than one Card in the canvas',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
  },
  args: {
    counter: 5,
    quantity: 1,
  },
  decorators: [
    story => html`<div style="display: flex; gap: 10px;">${story()}</div>`,
  ],
};

export default meta;

const Template = (args: IStory) => {
  return html`${Array(args.quantity)
    .fill(0)
    .map(
      () =>
        html` <coe-card
          .title="${args.title}"
          .counter="${args.counter}"
          .type="${args.type}">
        </coe-card>`,
    )}`;
};

export const Accent: StoryObj<IStory> = {
  args: {
    title: 'Accent Card',
    type: 'accent',
  },
  render: Template,
};

export const Secondary: StoryObj<IStory> = {
  args: {
    title: 'Secondary Card',
    type: 'secondary',
  },
  render: Template,
};

export const Success: StoryObj<IStory> = {
  args: {
    title: 'Success Card',
    type: 'success',
  },
  render: Template,
};

export const Danger: StoryObj<IStory> = {
  args: {
    title: 'Danger Card',
    type: 'danger',
  },
  render: Template,
};

export const Warning: StoryObj<IStory> = {
  args: {
    title: 'Warning Card',
    type: 'warning',
  },
  render: Template,
};
