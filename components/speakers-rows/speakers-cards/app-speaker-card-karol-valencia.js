import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardKarolValencia extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/karolvalencia/?originalSubdomain=es">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/karol-valencia.jpeg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Karol Valencia
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-karol-valencia', AppSpeakerCardKarolValencia)