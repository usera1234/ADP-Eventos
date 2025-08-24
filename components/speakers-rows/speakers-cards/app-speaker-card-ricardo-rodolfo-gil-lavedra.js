import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardRicardoRodolfoGilLavedra extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/in/ricardogillavedra/">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
<<<<<<< HEAD
                        <img src="static/images/speakers-cards/ricardo-rodolfo-gil-lavedra.jpeg" class="speakers-card">
=======
                        <img src="static/images/speakers-cards/ricardo-rodolfo-gil-lavedra" class="speakers-card">
>>>>>>> b5a6ab5884908a9f670a2e5627a5c9d4a4f20582
                    </div>
                    <div class="speakers-card-name">
                        Ricardo Rodolfo <br> Gil Lavedra
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-ricardo-rodolfo-gil-lavedra', AppSpeakerCardRicardoRodolfoGilLavedra)