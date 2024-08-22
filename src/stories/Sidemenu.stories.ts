import type {Meta, StoryObj} from '@storybook/web-components';
import {html} from 'lit';
import './Sidemenu';

const meta: Meta = {
  title: 'Example/Sidemenu',
  component: 'coe-sidemenu',
};

export default meta;

export const Default: StoryObj = {
  render: () => html`<coe-sidemenu></coe-sidemenu> `,
};
