import { LitElement, html, customElement, property } from 'lit-element';
  
  @customElement('my-tselement1')
  export class MytsElement1 extends LitElement {
  
    @property()
    foo = 'My First TypeScript lit-element-component';
  
   
    render(){
      
      return html`<p>${this.foo}</p>`;
    }
  }
  