import { html, render } from 'lit-html';

const bodyTemplete = name => 
  html`
    <div>Hello ${name}</div>
  `;

render(bodyTemplete('lit'), document.body);