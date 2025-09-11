import './app-sponsors-links.js'

class AppSponsorsRow6 extends HTMLElement {
  constructor() {
    super();
    
    this.innerHTML = `
              <div class="sponsors-grid">
                <div id="jusbaires" class="sponsors-item">
                <app-sponsors-link
                  href="https://editorial.jusbaires.gob.ar/?dev=1" src="static/images/sponsors/jusbaires.jpg"" clase="sponsors-item-img" estilo="">
                </app-sponsors-link>
                <div class="sponsors-texto">
                Editorial Jusbaires, la editorial del poder judicial.
                </div>
                </div> 
              </div>
    `;
  }
}
customElements.define('app-sponsors-row-6', AppSponsorsRow6);