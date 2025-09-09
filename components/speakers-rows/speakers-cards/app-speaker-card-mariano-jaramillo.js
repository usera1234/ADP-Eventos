import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardMarianoJaramillo extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/mariano-j/">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/mariano-jaramillo.png" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Mariano Jaramillo
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-mariano-jaramillo', AppSpeakerCardMarianoJaramillo)