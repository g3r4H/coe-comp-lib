import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { BaseComponent } from '../base-component';

type ButtonType = 'primary' | 'secondary' | 'disabled';

export interface IButton {
  type: ButtonType;
}

@customElement('coe-button')
export class Button extends BaseComponent implements IButton {
  @property({ type: String })
  type: ButtonType = 'primary';

  @state()
  protected _buttonTypeClasses = '';

  @state()
  protected _isDisabled = false;

  render() {
    this._buttonTypeClasses = this.setButtonTypeClasses(this.type);
    this._isDisabled = this.type == 'disabled' ? true : false;

    return html`
      <button
        class="font-sans text-sm py-1 px-2 rounded-lg ${this
          ._buttonTypeClasses}"
        @click="${this.logClick}"
        ?disabled="${this._isDisabled}">
        <slot></slot>
      </button>
    `;
  }

  setButtonTypeClasses(buttonType: ButtonType) {
    let classes = '';

    switch (buttonType) {
      case 'disabled':
        classes = 'disabled:bg-disabled text-gray-500';
        break;
      case 'primary':
        classes = 'bg-accent text-blue-800 hover:bg-blue-400';
        break;
      case 'secondary':
        classes = 'bg-secondary text-lime-800 hover:bg-lime-400';
        break;
    }

    return classes;
  }

  logClick(e: Event) {
    console.log('Clicked', e);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'coe-button': Button;
  }
}
