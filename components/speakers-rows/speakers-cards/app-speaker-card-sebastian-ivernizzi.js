import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardSebastianInvernizzi extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/sebastian-invernizzi-7a336a8/">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/sebastian-invernizzi.jpg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Sebastian Invernizzi
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-sebastian-ivernizzi', AppSpeakerCardSebastianInvernizzi)