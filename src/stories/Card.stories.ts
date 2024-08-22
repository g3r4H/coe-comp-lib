import type {Meta, StoryObj} from '@storybook/web-components';
import {html} from 'lit';
import './Card';
import {ICard} from './Card';

const meta: Meta<ICard> = {
  title: 'Example/Card',
  component: 'coe-card',
  argTypes: {
    name: {control: 'text'},
    counter: {control: 'number'},
  },
};

export default meta;

export const Default: StoryObj<ICard> = {
  args: {
    name: 'Notify me',
    counter: 5,
  },
  render: () => html`
    <coe-card
      name="Hole"
      counter="6">
    </coe-card>
  `,
};
