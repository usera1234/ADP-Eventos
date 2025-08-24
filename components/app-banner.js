class AppBanner extends HTMLElement {
    constructor(){
        super();
        
        this.innerHTML = `
            <div class="banner">
                <div class="banner-item">
<<<<<<< HEAD
                    <div class="banner-texto" style="color: black;">
=======
                    <div class="banner-texto" style="color: black; margin-left: 50px;">
>>>>>>> b5a6ab5884908a9f670a2e5627a5c9d4a4f20582
                        EVENTOS LEGALTECH<br>COLEGIO DE ABOGADOS
                    </div>
                </div>
                <div class="banner-item" style="margin-top: 205px">
                    <div class="banner-line" style="background-color:#2a8dbe; height: 100px; opacity: 0.4;"></div>
                    <div class="banner-line"></div>
                </div>
            </div>
        `;
    }
}
customElements.define('app-banner', AppBanner);
