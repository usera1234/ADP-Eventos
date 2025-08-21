import './comite-organizativo-rows/comite-organizativo-row-1.js';
import './comite-organizativo-rows/comite-organizativo-row-2.js';
import './comite-organizativo-rows/comite-organizativo-row-3.js';

class AppComiteOrganizativo extends HTMLElement {
    constructor() {
        super(); 

            this.innerHTML = `
                <div id="Comite-organizativo" class="comite-organizativo"> 
                    <<div class="comite-organizativo-titulo">
                        <h3 class="comite-organizativo-texto">COMITÉ ORGANIZADOR</h3>
                    </div>
                    <app-comite-organizativo-row-1></app-comite-organizativo-row-1>
                    <app-comite-organizativo-row-2></app-comite-organizativo-row-2>
                    <app-comite-organizativo-row-3></app-comite-organizativo-row-3>
                </div>

            `;
    }
}

customElements.define('app-comite-organizativo', AppComiteOrganizativo);