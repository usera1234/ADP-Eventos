class AppBanner extends HTMLElement {
    constructor(){
        super();
        
        this.innerHTML = `
            <div class="banner">
                <img src="static/images/fondo-banner-1.jpg" alt="banner" class="banner-image">               
                    <div class="banner-line-register"">
                        <div class="banner-item">
                            <div class="banner-texto">Corrientes 1441<br> 2do piso</div>
                            <button class="btn-banner" href="https://entrawiz.app/events/feria-legaltech-2025-cpacf/register" target="_blank">
                                <a href="https://entrawiz.app/events/feria-legaltech-2025-cpacf/register" target="_blank" style="text-decoration: none; color:white; opacity: 1;">
                                    REGISTRATE ACA
                                </a>
                            </button>
                            <div class="banner-texto">25 de septiembre<br>17 a 20hs</div>
                        </div>
                    </div>
                
            </div>
        `;
    }
}
customElements.define('app-banner', AppBanner);
