import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './input';
import { IInput } from './input';

export interface IStory extends IInput {
  quantity: number;
}

const meta: Meta<IStory> = {
  title: 'Components/Input',
  component: 'coe-input',
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Label' },
      },
    },
    type: {
      control: 'select',
      description: 'The input type',
      options: ['email', 'text', 'password'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    quantity: {
      control: { type: 'number' },
      description:
        'This is just a prop available in Storybook for rendering more than one Input in the canvas',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
  },
  args: {
    label: 'Label',
    type: 'text',
    quantity: 1,
  },
  decorators: [
    story =>
      html`<div style="display: flex; flex-direction: column; gap: 10px;">
        ${story()}
      </div>`,
  ],
};

export default meta;
type Story = StoryObj<IStory>;

const Template = (args: IStory) => {
  return html`${Array(args.quantity)
    .fill(0)
    .map(
      () =>
        html`
          <div class="w-[250px]">
            <coe-input .label="${args.label}" .type="${args.type}"></coe-input>
          </div>
        `,
    )}`;
};

export const Text: Story = {
  args: {
    type: 'text',
  },
  render: Template,
};

export const Email: Story = {
  args: {
    type: 'email',
  },
  render: Template,
};

export const Password: Story = {
  args: {
    type: 'password',
  },
  render: Template,
};
