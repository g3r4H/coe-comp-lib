import type {Meta, StoryObj} from '@storybook/web-components';
import {html} from 'lit';
import './Sidemenu';

interface IStory {
  quantity: number;
}

const meta: Meta<IStory> = {
  title: 'Example/Sidemenu',
  component: 'coe-sidemenu',
  argTypes: {
    quantity: {control: 'number', defaultValue: 3},
  },
  decorators: [story => html`<div style="width: 200px">${story()}</div>`],
};

export default meta;

const Template = (args: IStory) => {
  const items = Array(args.quantity)
    .fill(0)
    .map((_, index) => `Item ${index + 1}`);
  return html`<coe-sidemenu .items=${items}></coe-sidemenu>`;
};

export const Default: StoryObj<IStory> = {
  args: {
    quantity: 3,
  },
  render: Template,
};
