import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardRicardoGuerra extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/ricardo-guerra-rg/">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/ricardo-guerra.jpeg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Ricardo Guerra
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-ricardo-guerra', AppSpeakerCardRicardoGuerra)