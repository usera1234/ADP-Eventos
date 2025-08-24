class AppBannerAgenda extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
             <div class="banner-agenda">
                <div class="banner-agenda-item">
                    <div class="banner-agenda-texto">CRONOGRAMA</div>
                    <img id="banner-agenda-img"
                      src="static/images/deco-hexagonos.png" 
                      class="banner-agenda-img"
                      alt="Decoración hexágonos">
                </div>
             </div>
             `;
    }
}

customElements.define('app-banner-agenda', AppBannerAgenda);