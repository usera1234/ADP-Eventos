class AppSponsors extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div id="sponsors" class="sponsors">
            <div class="sponsors-header">
                <div class="sponsors-titulo">Sponsors</div>
                <div class="sponsors-line"></div>
            </div>
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
            </div>
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
            </div>
            <div class="sponsors-header">
                <div class="sponsors-line">
                </div>
            </div>
        `;    
    }
}
customElements.define('app-sponsors', AppSponsors);