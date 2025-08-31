class AppBanner extends HTMLElement {
    constructor(){
        super();
        
        this.innerHTML = `
            <div class="banner">
                <img src="static/images/fondo-banner.jpg" alt="banner" class="cronograma-imagen">               
                <div class="banner-item" >
                    <div class="banner-line-register"">
                        <div class="banner-item">
                            <div class="banner-texto" style="text-decoration: none;">
                              <a href="https://entrawiz.app/events/feria-legaltech-2025-cpacf/register" target="_blank" style="text-decoration: none; color:black;">
                                Registrate aca!
                              </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('app-banner', AppBanner);
