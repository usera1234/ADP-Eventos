import './speakers-cards/app-speaker-card-agustin-pesce.js'
import './speakers-cards/app-speaker-card-sebastian-ivernizzi.js'
import './speakers-cards/app-speaker-card-roger-arias.js'
import './speakers-cards/app-speaker-card-ricardo-rodolfo-gil-lavedra.js'

class AppSpeakerRow2 extends HTMLElement {
    constructor (){
        super();

            this.innerHTML = `
                <div class="speakers-row">

                    <app-speaker-card-agustin-pesce></app-speaker-card-agustin-pesce>

                    <app-speaker-card-sebastian-ivernizzi></app-speaker-card-sebastian-ivernizzi>

                    <app-speaker-card-roger-arias></app-speaker-card-roger-arias>

                    <app-speaker-card-ricardo-rodolfo-gil-lavedra></app-speaker-card-ricardo-rodolfo-gil-lavedra> 

                </div>
            `
    }
}

customElements.define('app-speaker-row-2', AppSpeakerRow2)