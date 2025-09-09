import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardLeonardoLimanski extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/leonardo-limanski-2263349/">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/leonardo-limanski.jpeg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Leonardo Limanski
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-leonardo-limanski', AppSpeakerCardLeonardoLimanski)