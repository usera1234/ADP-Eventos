import './speakers-cards/app-speaker-card-gabriel-coronel-lavecchia.js'
import './speakers-cards/app-speaker-card-ricardo-guerra.js'
import './speakers-cards/app-speaker-card-sebastian-ivernizzi.js'
import './speakers-cards/app-speaker-card-martin-ignacio-granero.js'

class AppSpeakerRow4 extends HTMLElement {
    constructor (){
        super();

            this.innerHTML = `
                <div class="speakers-row">
                    <app-speaker-card-gabriel-coronel-lavecchia></app-speaker-card-gabriel-coronel-lavecchia>

                    <app-speaker-card-sebastian-ivernizzi></app-speaker-card-sebastian-ivernizzi>

                    <app-speaker-card-ricardo-guerra></app-speaker-card-ricardo-guerra>

                    <app-speaker-card-martin-ignacio-granero></app-sepaker-card-martin-ignacio-granero>
                </div>
            `
    }
}

customElements.define('app-speaker-row-4', AppSpeakerRow4)