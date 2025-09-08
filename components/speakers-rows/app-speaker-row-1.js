import './speakers-cards/app-speaker-card-mario-adaro.js'
import './speakers-cards/app-speaker-card-agustin-pesce.js'
import './speakers-cards/app-speaker-card-ricardo-rodolfo-gil-lavedra.js'
import './speakers-cards/app-speaker-card-matias-juan-fischböck.js'

class AppSpeakerRow1 extends HTMLElement {
    constructor (){
        super();

            this.innerHTML = `
                <div class="speakers-row">
                    <app-speaker-card-ricardo-rodolfo-gil-lavedra></app-speaker-card-ricardo-rodolfo-gil-lavedra>

                    <app-speaker-card-agustin-pesce></app-speaker-card-agustin-pesce>

                    <app-speaker-card-mario-adaro></app-speaker-card-mario-adaro>

                    <app-speaker-card-matias-juan-fischböck></app-speaker-card-matias-juan-fischböck>

                </div>
            `
    }
}

customElements.define('app-speaker-row-1', AppSpeakerRow1)