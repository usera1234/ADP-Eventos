import './cronograma-columns/cronograma-row-1.js';
import './cronograma-columns/cronograma-row-2.js';
import './cronograma-columns/cronograma-row-3.js';
import './cronograma-columns/cronograma-row-4.js';
import './cronograma-columns/cronograma-row-5.js';
import './cronograma-columns/cronograma-row-6.js';
import './cronograma-columns/cronograma-row-7.js';
import './cronograma-columns/cronograma-row-8.js';
import './cronograma-columns/cronograma-row-9.js';
import './cronograma-columns/cronograma-row-10.js';
import './cronograma-columns/cronograma-row-11.js';
import './cronograma-columns/cronograma-row-12.js';
import './cronograma-columns/cronograma-row-13.js';

class AppAgenda extends HTMLElement {
  constructor() {
    super();

        this.innerHTML = `
            <div id="agenda" class="agenda">
                <img src="static/images/legaltech.jpg" alt="banner" class="cronograma-imagen">
                <app-cronograma-row-1></app-cronograma-row-1>
                <div class="cronograma-collumn">
                  <app-cronograma-row-2></app-cronograma-row-2>
                  <app-cronograma-row-3></app-cronograma-row-3>
                  <app-cronograma-row-4></app-cronograma-row-4>
                  <app-cronograma-row-5></app-cronograma-row-5>
                  <app-cronograma-row-6></app-cronograma-row-6>
                  <app-cronograma-row-7></app-cronograma-row-7>
                  <app-cronograma-row-8></app-cronograma-row-8>
                  <app-cronograma-row-9></app-cronograma-row-9>
                  <app-cronograma-row-10></app-cronograma-row-10>
                  <app-cronograma-row-11></app-cronograma-row-11>
                </div>
                <app-cronograma-row-12></app-cronograma-row-12>
                <div class="cronograma-collumn">
                  <app-cronograma-row-13></app-cronograma-row-13>
                </div>
            </div>
     `;
  }


     connectedCallback() {
    const root = this;

    this._onClick = (e) => {
      const card = e.target.closest('.cronograma-item');
      if (!card || !root.contains(card)) return;

      const Abierta = card.classList.contains('expandido');
      root.querySelectorAll('.cronograma-item.expandido')
          .forEach(el => el.classList.remove('expandido'));
      if (!Abierta) card.classList.add('expandido');
    };

    this.addEventListener('click', this._onClick);
  }

  disconnectedCallback() {
    if (this._onClick) this.removeEventListener('click', this._onClick);
  }
}

customElements.define('app-agenda', AppAgenda);