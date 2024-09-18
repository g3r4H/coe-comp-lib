import install from '@twind/with-web-components';
import { LitElement, css } from 'lit';
import tailwindConfig from '../twind.config';

@install(tailwindConfig)
export class BaseComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: sans-serif;
    }
  `;
}
