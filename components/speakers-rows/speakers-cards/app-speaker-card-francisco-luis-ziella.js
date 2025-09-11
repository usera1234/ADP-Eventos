import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardFranciscoLuisZiella extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/francisco-luis-ziella-a96b5212a/">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/francisco-luis-ziella.jpeg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Francisco Luis Ziella
                    </div>
                    <div class="speakers-card-role" style="margin-top: 50px;">
                        
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-francisco-luis-ziella', AppSpeakerCardFranciscoLuisZiella)