class AppBanner extends HTMLElement {
    constructor(){
        super();
        
        this.innerHTML = `
            <div class="banner">
                <div class="banner-item">
                    <div class="h3" style="color: black;">
                        EVENTOS LEGALTECH<br>COLEGIO DE ABOGADOS
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('app-banner', AppBanner);
