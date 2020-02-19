import { LitElement, html } from 'lit-element';
import './my-element1.js';

export class StartLitElement extends LitElement {

  static get properties() {
    return {
      message: { type: String },
      pie: { type: Boolean }
    };
  }

  constructor() {
    // Must call superconstructor first.
    super();

    // Initialize properties
    this.loadComplete = false;
    this.message = 'Hello World from LitElement';
    this.pie = false;
  }

  /**
   * Define a template for the new element by implementing LitElement's
   * `render` function. `render` must return a lit-html TemplateResult.
   */
  render() {
    return html`
      ${style}
      <h1>Start LitElement!</h1>
      <my-element1></my-element1>
      <my-tselement1></my-tselement1>
      <p>${this.message}</p>

      <input name="myinput" id="myinput" 
        type="checkbox"
        ?checked="${this.pie}"
        @change="${this.togglePie}">

      <label for="myinput">I like pie.</label>
      
      ${this.pie ? html`<lazy-element></lazy-element>` : html``}
    `;
  }

  firstUpdated() {
    this.loadLazy();

    const myInput = this.shadowRoot.getElementById('myinput');
    myInput.focus();
  }

  togglePie(e) {
    this.pie = !this.pie;
    this.loadLazy();
  }

  async loadLazy() {
    console.log('loadLazy');
    if(this.pie && !this.loadComplete) {
      return import('./lazy-element.js').then((LazyElement) => {
        this.loadComplete = true;
        console.log("LazyElement loaded");
      }).catch((reason) => {
        this.loadComplete = false;
        console.log("LazyElement failed to load", reason);
      });
    }
  }
}

customElements.define('start-lit-element', StartLitElement);

const style = html`
<style>
  :host { display: block; }
  :host([hidden]) { display: none; }
</style>
`