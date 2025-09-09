import './speakers-cards/app-speaker-card-beatriz-torres.js'
import './speakers-cards/app-speaker-card-leonardo-limanski.js'
import './speakers-cards/app-speaker-card-mariano-jaramillo.js'
import './speakers-cards/app-speaker-card-florencia-singla.js'

class AppSpeakerRow3 extends HTMLElement {
    constructor (){
        super();

            this.innerHTML = `
                <div class="speakers-row">
                    <app-speaker-card-leonardo-limanski></app-speaker-card-leonardo-limanski>

                    <app-speaker-card-beatriz-torres></app-speaker-card-beatriz-torres>

                    <app-speaker-card-mariano-jaramillo></app-speaker-card-mariano-jaramillo>

                    <app-speaker-card-florencia-singla></app-speaker-card-florencia-singla>
                </div>
            `
    }
}

customElements.define('app-speaker-row-3', AppSpeakerRow3)