import install from '@twind/with-web-components';
import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import config from '../../twind.config';

export interface ICard {
  name: string;
  counter: number;
}

/**
 * An COE sidemenu component
 */
@customElement('coe-card')
@install(config)
export class Card extends LitElement implements ICard {
  // API
  @property({type: String})
  name: string = '';

  @property({type: Number})
  counter: number = 0;

  override render() {
    return html`
      <div class="container border-1 border-gray-400 p-2">
        <div class="uppercase">${this.name}</div>
        <div class="">${this.counter}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'coe-card': Card;
  }
}
