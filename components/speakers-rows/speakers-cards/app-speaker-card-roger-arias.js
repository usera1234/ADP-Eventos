import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardRogerArias extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/rogerariasv/">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/roger-arias.jpeg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Roger Arias
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-roger-arias', AppSpeakerCardRogerArias)