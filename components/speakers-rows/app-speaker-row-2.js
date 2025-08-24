import './speakers-cards/app-speaker-card-agustin-pesce.js'
import './speakers-cards/app-speaker-card-beatriz-torres.js'
<<<<<<< HEAD
import './speakers-cards/app-speaker-card-roger-arias.js'
=======
import './speakers-cards/app-speaker-card-juan-gustavo-corvalan.js'
>>>>>>> b5a6ab5884908a9f670a2e5627a5c9d4a4f20582
import './speakers-cards/app-speaker-card-ricardo-rodolfo-gil-lavedra.js'

class AppSpeakerRow2 extends HTMLElement {
    constructor (){
        super();

            this.innerHTML = `
                <div class="speakers-row">

                    <app-speaker-card-agustin-pesce></app-speaker-card-agustin-pesce>

                    <app-speaker-card-beatriz-torres></app-speaker-card-beatriz-torres>

<<<<<<< HEAD
                    <app-speaker-card-roger-arias></app-speaker-card-roger-arias>
=======
                    <app-speaker-card-juan-gustavo-corvalan></app-speaker-card-juan-gustavo-corvalan>
>>>>>>> b5a6ab5884908a9f670a2e5627a5c9d4a4f20582

                    <app-speaker-card-ricardo-rodolfo-gil-lavedra></app-speaker-card-ricardo-rodolfo-gil-lavedra> 

                </div>
            `
    }
}

customElements.define('app-speaker-row-2', AppSpeakerRow2)