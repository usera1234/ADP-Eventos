class AppBanner extends HTMLElement {
    constructor(){
        super();
        
        this.innerHTML = `
            <div class="banner">
                <div class="banner-item">
                    <div class="banner-texto" style="color: black;">
                        FERIA LEGALTECH<br>COLEGIO DE ABOGADOS
                    </div>
                </div>
                <div class="banner-item" >
                    <div class="banner-line-register"">
                        <div class="banner-item" style="margin-top: 50px;">
                            <div class="banner-texto" style="width: 1350px; text-decoration: none; margin-left: 190px; font-size: 60px">
                              <a href="https://entrawiz.app/events/feria-legaltech-2025-cpacf/register" target="_blank" style="text-decoration: none;">
                                Registrate aca!
                              </a>
                            </div>
                        </div>
                    </div>
                    <div class="banner-line"></div>
                </div>
            </div>
        `;
    }
}
customElements.define('app-banner', AppBanner);
