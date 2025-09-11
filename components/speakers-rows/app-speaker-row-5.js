import './speakers-cards/app-speaker-card-gabriel-coronel-lavecchia.js'
import './speakers-cards/app-speaker-card-karol-valencia.js'
import './speakers-cards/app-speaker-card-francisco-luis-ziella.js'

class AppSpeakerRow5 extends HTMLElement {
    constructor (){
        super();

            this.innerHTML = `
                <div class="speakers-row">
                    <app-speaker-card-gabriel-coronel-lavecchia></app-speaker-card-gabriel-coronel-lavecchia>

                    <app-speaker-card-karol-valencia></app-speaker-card-karol-valencia>

                    <app-speaker-card-francisco-luis-ziella><app-speaker-card-francisco-luis-ziella>
                </div>
            `
    }
}

customElements.define('app-speaker-row-5', AppSpeakerRow5)