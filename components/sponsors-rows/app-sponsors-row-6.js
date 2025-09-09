import './app-sponsors-links.js'

class AppSponsorsRow6 extends HTMLElement {
  constructor() {
    super();
    
    this.innerHTML = `
              <div class="sponsors-grid">
                <div id="Wow" class="sponsors-item">
                <app-sponsors-link
                  href="https://juslab.com.ar/" src="static/images/sponsors/wow.png"" clase="sponsors-item-img" estilo="">
                </app-sponsors-link>
                <div class="sponsors-texto">
                Wow, legal design & visual law agency.
                </div>
                </div> 
              </div>
    `;
  }
}
customElements.define('app-sponsors-row-6', AppSponsorsRow6);