class AppFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="footer">
                <div class="footer-texto">
                    <div class="footer-line">
                    <div class="footer-row">
                        <img src="static/images/logo-ABOGACIA-ByN.png" alt="logo colegio abogados" class="footer-imagen">
                        <div class="footer-text">
                            CPACF Corrientes 1441
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-footer', AppFooter);