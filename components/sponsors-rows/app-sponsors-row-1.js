import './app-sponsors-links.js'

class AppSponsorsRow1 extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
            <div class="sponsors-grid">
                <div id="adp" class="sponsors-item">
                  <app-sponsors-link
                    href="https://www.cpacf.org.ar/" src="static/images/logo_adp.png" clase="sponsors-item-img">
                  </app-sponsors-link>
                <div class="sponsors-texto">
                Colegio de Abogados <br> de la Capital Federal
                </div>
                </div>
                <div id="Dropbox" class="sponsors-item">
                <app-sponsors-link
                    href="https://tline.com/tline-el-primer-tier-1-de-dropbox-en-america-latina-%F0%9F%8C%8E/" src="static/images/sponsors/dropbox.jpg" clase="sponsors-item-img">
                  </app-sponsors-link>
                <div class="sponsors-texto" style="margin-left: 10px;">
                Tline, el Primer Tier 1 de Dropbox en América Latina.
                </div>
            </div>
    `;
  }
}
customElements.define('app-sponsors-row-1', AppSponsorsRow1);