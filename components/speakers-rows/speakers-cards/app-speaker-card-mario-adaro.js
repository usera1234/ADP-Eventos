import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardMarioAdaro extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/mario-adaro-0a23a9140/">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/mario-adaro.jpeg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Mario Adaro
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-mario-adaro', AppSpeakerCardMarioAdaro)