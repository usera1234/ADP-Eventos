import './speakers-cards/app-speaker-card-deborah-paola-ferraro.js'
import './speakers-cards/app-speaker-card-ricardo-guerra.js'
import './speakers-cards/app-speaker-card-mario-adaro.js'
import './speakers-cards/app-speaker-card-juan-gustavo-corvalan.js'

class AppSpeakerRow1 extends HTMLElement {
    constructor (){
        super();

            this.innerHTML = `
                <div class="speakers-row">

                    <app-speaker-card-deborah-paola-ferraro></app-speaker-card-deborah-paola-ferraro>

                    <app-speaker-card-ricardo-guerra></app-speaker-card-ricardo-guerra>

                    <app-speaker-card-mario-adaro></app-speaker-card-mario-adaro>

                    <app-speaker-card-juan-gustavo-corvalan></app-speaker-card-juan-gustavo-corvalan> 

                </div>
            `
    }
}

customElements.define('app-speaker-row-1', AppSpeakerRow1)