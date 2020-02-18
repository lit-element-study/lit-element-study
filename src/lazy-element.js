import { LitElement, html } from 'lit-element';

export class LazyElement extends LitElement {
  render() {
    return html`
      ${style}
      <p>You like pie.</p>
    `;
  }
}

customElements.define('lazy-element', LazyElement);

const style = html`
<style>
  :host { display: block; }
  :host([hidden]) { display: none; }
</style>
`