class AppSponsorsRow1 extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
            <div class="sponsors-grid">
                <div id="adp" class="sponsors-item">
                <img src="static/images/logo_adp.png" alt="ADP Logo" class="sponsors-item-img">
                <div class="sponsors-texto">
                Colegio de Abogados <br> de la Capital Federal
                </div>
                </div>
                <div id="Dropbox" class="sponsors-item">
                <img src="static/images/sponsors/dropbox.jpg" alt="Sponsor Dropbox" class="sponsors-item-img">
                <div class="sponsors-texto" style="margin-left: 10px;">
                 Dropbox
                </div>
            </div>
    `;
  }
}
customElements.define('app-sponsors-row-1', AppSponsorsRow1);