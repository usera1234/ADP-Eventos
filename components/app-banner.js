class AppBanner extends HTMLElement {
    constructor(){
        super();
        
        this.innerHTML = `
            <div class="banner">
                <div class="banner-item">
                    <div class="banner-texto" style="color: black;">
                        EVENTOS LEGALTECH<br>COLEGIO DE ABOGADOS
                    </div>
                </div>
                <div class="banner-item" style="margin-top: 205px">
                    <div class="banner-line" style="background-color:#2a8dbe; height: 200px; opacity: 0.4;"></div>
                    <div class="banner-line"></div>
                </div>
            </div>
        `;
    }
}
customElements.define('app-banner', AppBanner);
