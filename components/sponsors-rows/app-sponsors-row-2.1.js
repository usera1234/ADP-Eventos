import './app-sponsors-links.js'

class AppSponsorsRow21 extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
            <div class="sponsors-grid">  
                <div id="Saga" class="sponsors-item">
                <app-sponsors-link
                    href="https://sagalegal.io/" src="static/images/sponsors/saga.png" clase="sponsors-item-img" estilo="width: 200px">
                  </app-sponsors-link>
                <div class="sponsors-texto" style="margin-left: 10px;">
                Saga, a secure and GDPR-approved environment built for legal workflows with customized prompt libraries and additional legal tools to streamline.
                </div>
                </div>
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
            </div>
    `;
  }
}
customElements.define('app-sponsors-row-21', AppSponsorsRow21);