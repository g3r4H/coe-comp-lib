import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './button';
import { IButton } from './button';

export interface IStory extends IButton {
  text: string;
}

const meta: Meta<IStory> = {
  title: 'Components/Button',
  component: 'coe-button',
  argTypes: {
    text: {
      control: 'text',
      description: 'This a prop available only in Storybook to render text inside the button. In a real app, you specify the button text through <slot>',
    },
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'disabled'],
      description: 'The type of the button that determines its color',
    },
  },
};

export default meta;
type Story = StoryObj<IStory>;

const Template = (args: IStory) => html`
  <coe-button type="${args.type}">${args.text}</coe-button>
`;

export const Primary: Story = {
  render: Template,
  args: {
    text: 'Primary',
    type: 'primary',
  },
};

export const Secondary: Story = {
  render: Template,
  args: {
    text: 'Secondary',
    type: 'secondary',
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    text: 'Disabled',
    type: 'disabled',
  },
};
