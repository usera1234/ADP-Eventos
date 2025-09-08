import './speakers-cards/app-speaker-card-gabriel-coronel-lavecchia.js'
import './speakers-cards/app-speaker-card-agustina-orellana.js'
import './speakers-cards/app-speaker-card-mariano-jaramillo.js'
import './speakers-cards/app-speaker-card-ricardo-guerra.js'

class AppSpeakerRow3 extends HTMLElement {
    constructor (){
        super();

            this.innerHTML = `
                <div class="speakers-row">
                    <app-speaker-card-ricardo-guerra></app-speaker-card-ricardo-guerra>

                    <app-speaker-card-beatriz-torres></app-speaker-card-beatriz-torres>

                    <app-speaker-card-agustina-orellana></app-speaker-card-agustina-orellana>

                    <app-speaker-card-mariano-jaramillo></app-speaker-card-mariano-jaramillo>
                </div>
            `
    }
}

customElements.define('app-speaker-row-3', AppSpeakerRow3)