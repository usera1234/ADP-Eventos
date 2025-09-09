import './speakers-cards/app-speaker-card-juan-pablo-altmark.js'
import './speakers-cards/app-speaker-card-david-mielnik.js'
import './speakers-cards/app-speaker-card-martin-ignacio-granero.js'
import './speakers-cards/app-speaker-card-deborah-paola-ferraro.js'


class AppSpeakerRow2 extends HTMLElement {
    constructor (){
        super();

            this.innerHTML = `
                <div class="speakers-row">
                    <app-speaker-card-deborah-paola-ferraro></app-speaker-card-deborah-paola-ferraro>

                    <app-speaker-card-david-mielnik></app-speaker-card-david-mielnik>

                    <app-speaker-card-juan-pablo-altmark></app-speaker-card-juan-pablo-altmark>

                    <app-speaker-card-martin-ignacio-granero></app-sepaker-card-martin-ignacio-granero>

                    <app-speaker-card-deborah-paola-ferraro></app-speaker-card-deborah-paola-ferraro>
                </div>
            `
    }
}

customElements.define('app-speaker-row-2', AppSpeakerRow2)