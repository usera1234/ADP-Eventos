import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardFlorenciaSingla extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/florencia-singla.jpeg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Florencia Singla
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-florencia-singla', AppSpeakerCardFlorenciaSingla)