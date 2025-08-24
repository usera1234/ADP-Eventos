import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardDeborahPaolaFerraro extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/deborah-paola-ferraro-904b0375/">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/deborah-paola-ferraro.jpeg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Deborah Paola <br> Ferraro
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-deborah-paola-ferraro', AppSpeakerCardDeborahPaolaFerraro)