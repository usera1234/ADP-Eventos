import './speakers-cards/app-speaker-card-deborah-paola-ferraro.js'
import './speakers-cards/app-speaker-card-agustin-pesce.js'
import './speakers-cards/app-speaker-card-ricardo-rodolfo-gil-lavedra.js'
import './speakers-cards/app-speaker-card-ricardo-guerra.js'

class AppSpeakerRow1 extends HTMLElement {
    constructor (){
        super();

            this.innerHTML = `
                <div class="speakers-row">
                    <app-speaker-card-ricardo-rodolfo-gil-lavedra></app-speaker-card-ricardo-rodolfo-gil-lavedra>

                    <app-speaker-card-agustin-pesce></app-speaker-card-agustin-pesce>

                    <app-speaker-card-deborah-paola-ferraro></app-speaker-card-deborah-paola-ferraro>

                    <app-speaker-card-ricardo-guerra></app-speaker-card-ricardo-guerra>

                </div>
            `
    }
}

customElements.define('app-speaker-row-1', AppSpeakerRow1)