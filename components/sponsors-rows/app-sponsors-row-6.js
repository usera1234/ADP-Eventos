import './app-sponsors-links.js'

class AppSponsorsRow6 extends HTMLElement {
  constructor() {
    super();
    
    this.innerHTML = `
            <div class="sponsors-grid">
                <div id="DoctIA" class="sponsors-item">
                <app-sponsors-link
                  href="https://brevity.pro/" src="static/images/sponsors/brevity.png" clase="sponsors-item-img">
                </app-sponsors-link>
                <div class="sponsors-texto">
                    Brevity, la plataforma inteligente para la gestión de sociedades
                </div>
                </div>
                <div id="Thomson-Reuters" class="sponsors-item">
                <div id="nombre-empresa" class="sponsors-item">
                <app-sponsors-link
                  href="https://noetingeryarmando.com/" src="static/images/sponsors/noetinger.png"" clase="sponsors-item-img">
                </app-sponsors-link>
                <div class="sponsors-texto">
                Provacy
                </div>
                </div>
            </div>
    `;
  }
}
customElements.define('app-sponsors-row-6', AppSponsorsRow6);