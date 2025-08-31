import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardDavidMielnik extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/davidmielnik/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/david-mielnik.jpeg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        David Mielnik
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-david-mielnik', AppSpeakerCardDavidMielnik)