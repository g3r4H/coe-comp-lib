import install from '@twind/with-web-components';
import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import config from '../twind.config';

export interface ISidemenu {
  items: string[];
}

/**
 * An COE sidemenu component
 */
@customElement('coe-sidemenu')
@install(config)
export class Sidemenu extends LitElement implements ISidemenu {
  // API
  @property()
  items: string[] = [];

  @property()
  color: string = '';

  override render() {
    console.log(this.items);
    return html`
      <div class="border border-gray-400 p-2 font-sans">
        <div class="bg-primary">60</div>
        <div class="bg-secondary">30</div>
        <div class="bg-accent">10</div>
        <div class="text-center pb-2 uppercase">New Side Menu</div>
        <ul>
          ${this.items.map(
            (item, index) =>
              html`<li
                class="cursor-pointer hover:bg-gray-200 bg-blue-${index + 1}00">
                ${item}
              </li>`,
          )}
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'coe-sidemenu': Sidemenu;
  }
}
