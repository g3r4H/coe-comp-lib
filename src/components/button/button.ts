import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import install from '@twind/with-web-components';
import config from '../../../twind.config';

/**
 * An COE button component
 */
@customElement('coe-button')
@install(config)
export class CoeButton extends LitElement {
  static styles = css`
    :host {
      border: 1px solid blue;
      padding: 5px;
    }
  `;

  // API
  @property()
  text?: string = 'Clik me';

  override render() {
    return html`
      <button
        class="bg-lime-400"
        type="button">
        ${this.text}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'coe-button': CoeButton;
  }
}
