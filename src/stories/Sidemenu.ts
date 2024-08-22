import install from '@twind/with-web-components';
import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import config from '../../twind.config';

/**
 * An COE sidemenu component
 */
@customElement('coe-sidemenu')
@install(config)
export class Sidemenu extends LitElement {
  // API
  @state()
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

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
