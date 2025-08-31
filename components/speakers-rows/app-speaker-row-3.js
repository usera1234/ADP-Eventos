import './speakers-cards/app-speaker-card-beatriz-torres.js'
import './speakers-cards/app-speaker-card-david-mielnik.js'
import './speakers-cards/app-speaker-card-matias-juan-fischböck.js'
import './speakers-cards/app-speaker-card-martin-ignacio-granero.js'

class AppSpeakerRow3 extends HTMLElement {
    constructor (){
        super();

            this.innerHTML = `
                <div class="speakers-row">

                    <app-speaker-card-matias-juan-fischböck></app-speaker-card-matias-juan-fischböck>

                    <app-speaker-card-beatriz-torres></app-speaker-card-beatriz-torres>

                    <app-speaker-card-david-mielnik></app-speaker-card-david-mielnik>

                    <app-speaker-card-martin-ignacio-granero></app-speaker-card-martin-ignacio-granero> 

                </div>
            `
    }
}

customElements.define('app-speaker-row-3', AppSpeakerRow3)