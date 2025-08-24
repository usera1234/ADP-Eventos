import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardJuanGustavoCorvalan extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/juan-gustavo-corvalan/">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/juan-gustavo-corvalan.jpeg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Juan Gustavo <br> Corvalan
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-juan-gustavo-corvalan', AppSpeakerCardJuanGustavoCorvalan)