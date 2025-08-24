import './comite-organizativo-cards/c.o-3,1.js';
import './comite-organizativo-cards/c.o-3,2.js';
import './comite-organizativo-cards/c.o-3,3.js';
import './comite-organizativo-cards/c.o-3,4.js';

class AppComiteOrganizativoRow3 extends HTMLElement {
    constructor() {
        super(); 

        this.innerHTML = `
                <div class="comite-organizativo-row">
                    <app-co-31></app-co-31> <!-- file:///C:/Proyectos/ADP-Eventos/components/comite-organizativo-rows/comite-organizativo-cards/c.o-3,1.js -->

                    <app-co-32></app-co-32> <!-- file:///C:/Proyectos/ADP-Eventos/components/comite-organizativo-rows/comite-organizativo-cards/c.o-3,2.js -->
                    
                    <app-co-33></app-co-33> <!-- file:///C:/Proyectos/ADP-Eventos/components/comite-organizativo-rows/comite-organizativo-cards/c.o-3,3.js -->
                    
                    <app-co-34></app-co-34> <!-- file:///C:/Proyectos/ADP-Eventos/components/comite-organizativo-rows/comite-organizativo-cards/c.o-3,4.js -->
                </div>
        `;
    }
}

customElements.define('app-comite-organizativo-row-3', AppComiteOrganizativoRow3);