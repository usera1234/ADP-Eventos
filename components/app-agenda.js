import './cronograma-columns/cronograma-column-1.js';
import './cronograma-columns/cronograma-column-2.js';
import './cronograma-columns/cronograma-column-3.js';

class AppAgenda extends HTMLElement {
  constructor() {
    super();

        this.innerHTML = `
            <div id="agenda" class="agenda">
                <img src="static/images/legaltech.jpg" alt="banner" class="cronograma-imagen">
                <app-cronograma-column-1></app-cronograma-column-1> <!-- file:///C:/Proyectos/ADP-Eventos/components/cronograma-columns/cronograma-column-1.js -->
                <app-cronograma-column-2></app-cronograma-column-2> <!-- file:///C:/Proyectos/ADP-Eventos/components/cronograma-columns/cronograma-column-2.js -->
                <app-cronograma-column-3></app-cronograma-column-3> <!-- file:///C:/Proyectos/ADP-Eventos/components/cronograma-columns/cronograma-column-3.js -->
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