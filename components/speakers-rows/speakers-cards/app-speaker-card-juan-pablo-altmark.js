import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardJuanPabloAltmark extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/juan-pablo-altmark.jpeg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Juan Pablo <br> Altmark
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-juan-pablo-altmark', AppSpeakerCardJuanPabloAltmark)