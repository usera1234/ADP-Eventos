import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardMatiasJuanFischböck extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/mfischbock/">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/matias-juan-Fischböck.jpeg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Matias Juan <br> Fischböck 
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-matias-juan-fischböck', AppSpeakerCardMatiasJuanFischböck)