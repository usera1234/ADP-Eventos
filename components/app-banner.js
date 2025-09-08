class AppBanner extends HTMLElement {
    constructor(){
        super();
        
        this.innerHTML = `
            <div class="banner">
                <img src="static/images/fondo-banner-1.jpg" alt="banner" class="cronograma-imagen">               
                    <div class="banner-line-register"">
                        <div class="banner-item">
                            <button class="btn-banner" href="https://entrawiz.app/events/feria-legaltech-2025-cpacf/register" target="_blank">
                                <a href="https://entrawiz.app/events/feria-legaltech-2025-cpacf/register" target="_blank" style="text-decoration: none; color:black; opacity: 1;">
                                    Registrate aca!
                                </a>
                                </div>
                            </button>
                        </div>
                    </div>
                
            </div>
        `;
    }
}
customElements.define('app-banner', AppBanner);
