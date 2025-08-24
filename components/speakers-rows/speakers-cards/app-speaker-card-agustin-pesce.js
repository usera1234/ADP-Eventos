import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardAgustinPesce extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/agustinpesce/">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/agustin-pesce.jpeg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Agustin Pesce
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-agustin-pesce', AppSpeakerCardAgustinPesce)