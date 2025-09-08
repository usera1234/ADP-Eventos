import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardGabrielCoronelLavecchia extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/gclavecchia/">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/gabriel-coronel-lavvechia.jpeg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Gabriel Coronel Lavecchia
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-gabriel-coronel-lavvechia', AppSpeakerCardGabrielCoronelLavecchia)