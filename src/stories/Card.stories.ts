import type {Meta, StoryObj} from '@storybook/web-components';
import {html} from 'lit';
import './Card';
import {ICard} from './Card';

interface IStory extends ICard {
  quantity: number;
}

const meta: Meta<IStory> = {
  title: 'Example/Card',
  component: 'coe-card',
  argTypes: {
    name: {control: 'text'},
    counter: {control: 'number'},
    quantity: {control: 'number', defaultValue: 1},
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
          .name="${args.name}"
          .counter="${args.counter}"></coe-card>`,
    )}`;
};

export const Default: StoryObj<IStory> = {
  args: {
    name: 'Notify me',
    counter: 5,
    quantity: 3,
  },
  render: Template,
};
