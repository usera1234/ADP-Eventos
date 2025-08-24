import './speakers-cards/app-speaker-card-agustin-pesce.js'
import './speakers-cards/app-speaker-card-beatriz-torres.js'
import './speakers-cards/app-speaker-card-juan-gustavo-corvalan.js'
import './speakers-cards/app-speaker-card-ricardo-rodolfo-gil-lavedra.js'

class AppSpeakerRow2 extends HTMLElement {
    constructor (){
        super();

            this.innerHTML = `
                <div class="speakers-row">

                    <app-speaker-card-agustin-pesce></app-speaker-card-agustin-pesce>

                    <app-speaker-card-beatriz-torres></app-speaker-card-beatriz-torres>

                    <app-speaker-card-juan-gustavo-corvalan></app-speaker-card-juan-gustavo-corvalan>

                    <app-speaker-card-ricardo-rodolfo-gil-lavedra></app-speaker-card-ricardo-rodolfo-gil-lavedra> 

                </div>
            `
    }
}

customElements.define('app-speaker-row-2', AppSpeakerRow2)