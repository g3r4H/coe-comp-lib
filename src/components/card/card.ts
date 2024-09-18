import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '../base-component';

export type CardType =
  | 'accent'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning';

export interface ICard {
  title: string;
  counter: number;
  type: CardType;
}

@customElement('coe-card')
export class Card extends BaseComponent implements ICard {
  static styles = css`
    :host {
      flex: 1;
      min-width: 195px;
      max-width: 220px;
    }
  `;

  @property({ type: String })
  title = '';

  @property({ type: Number })
  counter = 0;

  @property({ type: String })
  type: CardType = 'accent';

  render() {
    const { cardClasses, titleClasses, counterClasses } = this.setTypeClasses(
      this.type,
    );
    return html`
      <div
        class="flex p-2 h-full rounded-lg items-center justify-between gap-3 border text-black ${cardClasses}">
        <div class="leading-tight ${titleClasses}">${this.title}</div>
        <div
          class="aspect-square p-1 min-w-[35px] max-w-[35px] border rounded-3xl bg-white flex items-center justify-center ${counterClasses}">
          ${this.counter}
        </div>
      </div>
    `;
  }

  setTypeClasses(type: CardType) {
    let cardClasses = '';
    let titleClasses = '';
    let counterClasses = '';

    switch (type) {
      case 'accent':
        cardClasses = 'border-blue-400 bg-blue-100';
        titleClasses = 'text-blue-800';
        counterClasses = 'text-blue-700 border-blue-400';
        break;
      case 'secondary':
        cardClasses = 'border-lime-400 bg-lime-100';
        titleClasses = 'text-lime-800';
        counterClasses = 'text-lime-700 border-lime-400';
        break;
      case 'success':
        cardClasses = 'border-green-400 bg-green-100';
        titleClasses = 'text-green-800';
        counterClasses = 'text-green-700 border-green-400';
        break;
      case 'danger':
        cardClasses = 'border-red-400 bg-red-100';
        titleClasses = 'text-red-800';
        counterClasses = 'text-red-700 border-red-400';
        break;
      case 'warning':
        cardClasses = 'border-yellow-400 bg-yellow-100';
        titleClasses = 'text-yellow-800';
        counterClasses = 'text-yellow-700 border-yellow-400';
        break;
    }

    return { cardClasses, titleClasses, counterClasses };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'coe-card': Card;
  }
}
