import './speakers-cards/app-speaker-card-deborah-paola-ferraro.js'
import './speakers-cards/app-speaker-card-ricardo-guerra.js'
import './speakers-cards/app-speaker-card-mario-adaro.js'
<<<<<<< HEAD
import './speakers-cards/app-speaker-card-juan-gustavo-corvalan.js'
=======
import './speakers-cards/app-speaker-card-matias-juan-fischböck.js'
>>>>>>> b5a6ab5884908a9f670a2e5627a5c9d4a4f20582

class AppSpeakerRow1 extends HTMLElement {
    constructor (){
        super();

            this.innerHTML = `
                <div class="speakers-row">

                    <app-speaker-card-deborah-paola-ferraro></app-speaker-card-deborah-paola-ferraro>

                    <app-speaker-card-ricardo-guerra></app-speaker-card-ricardo-guerra>

                    <app-speaker-card-mario-adaro></app-speaker-card-mario-adaro>

<<<<<<< HEAD
                    <app-speaker-card-juan-gustavo-corvalan></app-speaker-card-juan-gustavo-corvalan> 
=======
                    <app-speaker-card-matias-juan-fischböck></app-speaker-card-matias-juan-fischböck> 
>>>>>>> b5a6ab5884908a9f670a2e5627a5c9d4a4f20582

                </div>
            `
    }
}

customElements.define('app-speaker-row-1', AppSpeakerRow1)