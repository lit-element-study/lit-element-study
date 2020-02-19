import { LitElement, html } from 'lit-element';

export class MyElement1 extends LitElement {
  render() {
    return html`
      <p>My First JavaScript lit-element-component.</p>
    `;
  }
}

customElements.define('my-element1', MyElement1);