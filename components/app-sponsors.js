import './sponsors-rows/app-sponsors-row-1.js';
import './sponsors-rows/app-sponsors-row-2.js';

class AppSponsors extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div id="sponsors" class="sponsors">
            <div class="sponsors-header">
                <div class="sponsors-titulo">Sponsors</div>
                <div class="sponsors-line"></div>
            </div>
            <app-sponsors-row-1></app-sponsors-row-1>
            <app-sponsors-row-2></app-sponsors-row-2>
            <div class="sponsors-header">
                <div class="sponsors-line">
                </div>
            </div>
        `;    
    }
}
customElements.define('app-sponsors', AppSponsors);