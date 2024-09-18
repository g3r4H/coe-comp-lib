import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { BaseComponent } from '../base-component';

export type InputType = 'email' | 'text' | 'password';

export interface IInput {
  label: string;
  type: InputType;
}

@customElement('coe-input')
export class Input extends BaseComponent implements IInput {
  @property({ type: String })
  label = '';

  @property({ type: String })
  type: InputType = 'text';

  @state()
  errorMessage = '';

  render() {
    const hasError = this.errorMessage !== '';

    return html`
      <div>
        <label
          for="email"
          class="block text-sm font-medium leading-6 text-black"
          >${this.label}</label
        >
        <div class="mt-2">
          <input
            name="${this.type}"
            type="${this.type}"
            placeholder="Type something"
            class="block w-full rounded-md border 
              focus:outline-none 
              p-1 
              text-black 
              placeholder:text-gray-400 
              sm:text-sm 
              ${hasError
              ? 'ring-2 ring-red-400 focus:ring-red-400'
              : 'ring-1 ring-gray-300 focus:ring-blue-500'}"
            @input="${this.handleInput}" />

          ${hasError
            ? html`
                <div
                  class="error-message mt-2 text-red-500 text-xs flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-3.5">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                  <div>${this.errorMessage}</div>
                </div>
              `
            : html``}
        </div>
      </div>
    `;
  }

  handleInput(e: Event) {
    const input = (e.target as HTMLInputElement).value;
    if (input === '') {
      this.errorMessage = 'This field is required.';
    } else if (input.length < 3) {
      this.errorMessage = 'Input must be at least 3 characters long.';
    } else {
      this.errorMessage = '';
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'coe-input': Input;
  }
}
