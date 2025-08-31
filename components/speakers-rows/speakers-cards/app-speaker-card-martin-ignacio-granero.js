import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardMartinIgnacioGranero extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/mart%C3%ADn-i-granero-33b3a015/?originalSubdomain=ar">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/martin-ignacio-granero.jpeg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Martín Ignacio <br> Granero
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-martin-ignacio-granero', AppSpeakerCardMartinIgnacioGranero)