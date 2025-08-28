import './comite-organizativo-cards/c.o-1,1.js';
import './comite-organizativo-cards/c.o-1,2.js';
import './comite-organizativo-cards/c.o-1,3.js';
import './comite-organizativo-cards/c.o-1,4.js';

class AppComiteOrganizativoRow1 extends HTMLElement {
    constructor() {
        super(); 

        this.innerHTML = `
                <div class="comite-organizativo-row">
                    <app-co-12></app-co-12> <!-- file:///C:/Proyectos/ADP-Eventos/components/comite-organizativo-rows/comite-organizativo-cards/c.o-1,2.js -->
                    
                    <app-co-13></app-co-13> <!-- file:///C:/Proyectos/ADP-Eventos/components/comite-organizativo-rows/comite-organizativo-cards/c.o-1,3.js -->
                    
                    <app-co-11></app-co-11> <!-- file:///C:/Proyectos/ADP-Eventos/components/comite-organizativo-rows/comite-organizativo-cards/c.o-1,1.js -->

                    <app-co-14></app-co-14> <!-- file:///C:/Proyectos/ADP-Eventos/components/comite-organizativo-rows/comite-organizativo-cards/c.o-1,4.js -->
                </div>
        `;
    }
}

customElements.define('app-comite-organizativo-row-1', AppComiteOrganizativoRow1);