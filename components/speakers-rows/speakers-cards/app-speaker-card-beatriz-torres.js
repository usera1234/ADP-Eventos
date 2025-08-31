import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardBeatrizTorres extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/beatriz-torres-1ba157258/4">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/beatriz-torres.jpeg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Beatriz Torres
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-beatriz-torres', AppSpeakerCardBeatrizTorres)