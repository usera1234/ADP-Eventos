import './speakers-cards/app-speaker-card-sebastian-ivernizzi.js'
import './speakers-cards/app-speaker-card-roger-arias.js'
import './speakers-cards/app-speaker-card-david-mielnik.js'
import './speakers-cards/app-speaker-card-deborah-paola-ferraro.js'

class AppSpeakerRow2 extends HTMLElement {
    constructor (){
        super();

            this.innerHTML = `
                <div class="speakers-row">

                    <app-speaker-card-david-mielnik></app-speaker-card-david-mielnik>

                    <app-speaker-card-sebastian-ivernizzi></app-speaker-card-sebastian-ivernizzi>

                    <app-speaker-card-roger-arias></app-speaker-card-roger-arias>

                    <app-speaker-card-deborah-paola-ferraro></app-speaker-card-deborah-paola-ferraro>
                </div>
            `
    }
}

customElements.define('app-speaker-row-2', AppSpeakerRow2)