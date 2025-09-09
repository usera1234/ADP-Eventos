import './sponsors-rows/app-sponsors-row-1.js';
import './sponsors-rows/app-sponsors-row-2.js';
import './sponsors-rows/app-sponsors-row-3.js';
import './sponsors-rows/app-sponsors-row-4.js';
import './sponsors-rows/app-sponsors-row-5.js';
import './sponsors-rows/app-sponsors-row-6.js';
import './sponsors-rows/app-sponsors-row-7.js';
import './sponsors-rows/app-sponsors-row-8.js'

class AppSponsors extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div id="sponsors" class="sponsors">
            <div class="sponsors-header">
                <div class="sponsors-titulo">Sponsors</div>
                <div class="sponsors-line"></div>
            </div>
            <app-sponsors-row-1></app-sponsors-row-1>   <!-- file:///C:/Proyectos/ADP-Eventos/components/sponsors-row/app-sponsors-row-1.js -->

            <app-sponsors-row-2></app-sponsors-row-2>   <!-- file:///C:/Proyectos/ADP-Eventos/components/sponsors-row/app-sponsors-row-2.js -->
            <div class="sponsors-header">
                <div class="sponsors-titulo">Empresas Legaltech</div>
                <div class="sponsors-line"></div>
            </div>
            <app-sponsors-row-3></app-sponsors-row-3>   <!-- file:///C:/Proyectos/ADP-Eventos/components/sponsors-row/app-sponsors-row-3.js -->

            <app-sponsors-row-4></app-sponsors-row-4>   <!-- file:///C:/Proyectos/ADP-Eventos/components/sponsors-row/app-sponsors-row-4.js -->

            <app-sponsors-row-5></app-sponsors-row-5>   <!-- file:///C:/Proyectos/ADP-Eventos/components/sponsors-row/app-sponsors-row-5.js -->

            <app-sponsors-row-6></app-sponsors-row-6>

            <div class="sponsors-header">
                <div class="sponsors-titulo">Apoyo institucional</div>
                <div class="sponsors-line"></div>
            </div>
            <app-sponsors-row-7></app-sponsors-row-6>

            <app-sponsors-row-8></app-sponsors-row-7>
            </div>
        `;    
    }
}
customElements.define('app-sponsors', AppSponsors);