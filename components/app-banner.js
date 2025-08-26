import './app-button-register.js'

class AppBanner extends HTMLElement {
    constructor(){
        super();
        
        this.innerHTML = `
            <div class="banner">
                <div class="banner-item">
                    <div class="banner-texto" style="color: black;margin-left: 180px;">
                        EVENTOS LEGALTECH<br>COLEGIO DE ABOGADOS
                    </div>
                </div>
                <div class="banner-item" style="margin-top: 205px">
                    <div class="banner-line" style="background-color:#2a8dbe; height: 200px; opacity: 0.4;">
                        <div class="banner-item" style="flex-direction: row; margin-top: 40px; margin-left: 180px;">
                            <div class="banner-texto" style="margin-left: 10px; font-size: 60px">
                                Registrate aca:
                            </div>
                            <div>
                                <a href="https://entrawiz.app/events/feria-legaltech-2025-cpacf/register" target="_blank" style="text-decoration: none;">
                                <button class="button-register">Register</button>
                            </div
                        </div>
                    </div>
                    <div class="banner-line"></div>
                </div>
            </div>
        `;
    }
}
customElements.define('app-banner', AppBanner);
