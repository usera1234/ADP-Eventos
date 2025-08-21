import './comite-organizativo-cards/c.o-2,1.js';
import './comite-organizativo-cards/c.o-2,2.js';
import './comite-organizativo-cards/c.o-2,3.js';
import './comite-organizativo-cards/c.o-2,4.js';

class AppComiteOrganizativoRow2 extends HTMLElement {
    constructor() {
        super(); 

        this.innerHTML = `
                <div class="comite-organizativo-row">
                    <app-co-21></app-co-21> 

                    <app-co-22></app-co-22>
                    
                    <app-co-23></app-co-23>
                    
                    <app-co-24></app-co-24>
                </div>
        `;
    }
}

customElements.define('app-comite-organizativo-row-2', AppComiteOrganizativoRow2);