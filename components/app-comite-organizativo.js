import './comite-organizativo-rows/comite-organizativo-row-1.js';
import './comite-organizativo-rows/comite-organizativo-row-2.js';

class AppComiteOrganizativo extends HTMLElement {
    constructor() {
        super(); 

            this.innerHTML = `
                <div id="Comite-organizativo" class="comite-organizativo"> 
                    <div class="comite-organizativo-card">
                        <<div class="comite-organizativo-titulo">
                            <h3 class="comite-organizativo-texto">COMITÉ ORGANIZADOR</h3>
                        </div>
                        <app-comite-organizativo-row-1></app-comite-organizativo-row-1> <!-- file:///C:/Proyectos/ADP-Eventos/components/comite-organizativo-rows/comite-organizativo-row-1.js -->
                        
                        <app-comite-organizativo-row-2></app-comite-organizativo-row-2> <!-- file:///C:/Proyectos/ADP-Eventos/components/comite-organizativo-rows/comite-organizativo-row-2.js -->  
                    </div>    
                </div>

            `;
    }
}

customElements.define('app-comite-organizativo', AppComiteOrganizativo);