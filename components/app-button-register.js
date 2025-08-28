class AppButtonRegister extends HTMLElement {
    constructor(){
        super();
        
        this.innerHTML = `
            <div class="banner-texto" style="margin-left: 10px">
             <a onclick="window.location.href='https://entrawiz.app/events/feria-legaltech-2025-cpacf/register'>
                Registrate aca!
             </a>
            </div>
        `
    }      
}
customElements.define('app-button-register', AppButtonRegister);