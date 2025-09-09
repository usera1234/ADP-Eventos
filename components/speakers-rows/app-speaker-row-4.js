import './speakers-cards/app-speaker-card-gabriel-coronel-lavecchia.js'
import './speakers-cards/app-speaker-card-juan-pablo-altmark.js'
import './speakers-cards/app-speaker-card-mariano-jaramillo.js'
import './speakers-cards/app-speaker-card-florencia-singla.js'
import './speakers-cards/app-speaker-card-gabriel-coronel-lavecchia.js'

class AppSpeakerRow4 extends HTMLElement {
    constructor (){
        super();

            this.innerHTML = `
                <div class="speakers-row">
                    <app-speaker-card-gabriel-coronel-lavecchia></app-speaker-card-gabriel-coronel-lavecchia>

                    <app-speaker-card-juan-pablo-altmark></app-speaker-card-juan-pablo-altmark>

                </div>
            `
    }
}

customElements.define('app-speaker-row-4', AppSpeakerRow4)