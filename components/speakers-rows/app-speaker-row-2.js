import './speakers-cards/app-speaker-card-sebastian-ivernizzi.js'
import './speakers-cards/app-speaker-card-roger-arias.js'
import './speakers-cards/app-speaker-card-mario-adaro.js'
import './speakers-cards/app-speaker-card-juan-gustavo-corvalan.js'

class AppSpeakerRow2 extends HTMLElement {
    constructor (){
        super();

            this.innerHTML = `
                <div class="speakers-row">

                    <app-speaker-card-mario-adaro></app-speaker-card-mario-adaro>

                    <app-speaker-card-sebastian-ivernizzi></app-speaker-card-sebastian-ivernizzi>

                    <app-speaker-card-roger-arias></app-speaker-card-roger-arias>

                    <app-speaker-card-juan-gustavo-corvalan></app-speaker-card-juan-gustavo-corvalan> 

                </div>
            `
    }
}

customElements.define('app-speaker-row-2', AppSpeakerRow2)