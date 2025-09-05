class AppFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="footer">
            <div class="footer-content">
                <p>© 2024 ADP Eventos. Todos los derechos reservados.</p>
                <p>Contacto:
            </div>
        </div>
        `;
    }
}

customElements.define('app-footer', AppFooter);