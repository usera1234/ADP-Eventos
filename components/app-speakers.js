import './speakers-rows/app-speaker-row-1.js'
import './speakers-rows/app-speaker-row-2.js'

class AppSpeakers extends HTMLElement {
    constructor(){
        super();

        this.innerHTML = `
            <div id="speakers" class="speakers">
                <div class="speakers-header">
                    <div class="speakers-line" style="background-color:#2a8dbe; height: 150px; opacity: 0.4;"">
                        <div class="speakers-titulo">Speakers</div>
                    </div>
                    <div class="speakers-line" style="width: 50%"></div>
                </div>
                <div class="speakers-grid">

                    <app-speaker-row-1></app-speaker-row-1>

                    <app-speaker-row-2></app-speaker-row-2>

                </div>
            </div>
        `;
    }
}

customElements.define('app-speakers', AppSpeakers);