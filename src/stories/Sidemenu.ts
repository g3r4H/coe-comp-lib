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

  override render() {
    console.log(this.items);
    return html`
      <div class="border border-gray-400 p-2">
        <div class="text-center pb-2 uppercase">Side Menu</div>
        <ul>
          ${this.items.map(
            item =>
              html`<li class="cursor-pointer hover:bg-gray-200">${item}</li>`,
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
