class AppSponsorsRow2 extends HTMLElement {
  constructor() {
    super();
    
    this.innerHTML = `
            <div class="sponsors-grid">
                <div id="nombre-empresa" class="sponsors-item">
                <img src="static/images/logo_adp.png" alt="ADP Logo" class="sponsors-item-img">
                <div class="sponsors-texto">
                Colegio de Abogados <br> de la Capital Federal
                </div>
                </div>
                <div id="nombre-empresa" class="sponsors-item">
                <img src="static/images/logo_adp.png" alt="ADP Logo" class="sponsors-item-img">
                <div class="sponsors-texto">
                Colegio de Abogados <br> de la Capital Federal
                </div>
                </div>
                <div id="nombre-empresa" class="sponsors-item">
                <img src="static/images/logo_adp.png" alt="ADP Logo" class="sponsors-item-img">
                <div class="sponsors-texto">
                Colegio de Abogados <br> de la Capital Federal
                </div>
                </div>
            </div>
    `;
  }
}
customElements.define('app-sponsors-row-2', AppSponsorsRow2);