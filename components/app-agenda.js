import './cronograma-columns/cronograma-column-1.js';
import './cronograma-columns/cronograma-column-2.js';
import './cronograma-columns/cronograma-column-3.js';

class AppAgenda extends HTMLElement {
  constructor() {
    super();

        this.innerHTML = `
            <div id="agenda" class="agenda">
                <img src="static/images/legaltech.jpg" alt="banner" class="cronograma-imagen">
                <app-cronograma-column-1></app-cronograma-column-1>
                <app-cronograma-column-2></app-cronograma-column-2>
                <app-cronograma-column-3></app-cronograma-column-3>
            </div>
     `;
  }
}

customElements.define('app-agenda', AppAgenda);