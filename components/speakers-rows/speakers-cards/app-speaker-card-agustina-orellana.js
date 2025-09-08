import './speakers-linkedin/app-speakers-linkedin.js'

class AppSpeakerCardAgustinaOrellana extends HTMLElement {
    constructor(){
        super();

            this.innerHTML = `
                <div class="speakers-item">
                    <app-speakers-linkedin
                        href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHzi27MuClbJwAAAZkrpnPoRGAoZbEWX-9p7tXnoqcyZehJXN0S7LcwSpZuyOP36TlbARk4szS8KPnQIxRe3YlUnMGrpDUVKoGe4TXSDcnPtf8R6tcB2MGm47PKt-vYi7WOBK0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmagustinaorellana%2F">
                    </app-speakers-linkedin>
                    <div class="speakers-card">
                        <img src="static/images/speakers-cards/agustina-orellana.jpg" class="speakers-card">
                    </div>
                    <div class="speakers-card-name">
                        Agustina Orellana          
                    </div>
                </div>
            `
    }
}

customElements.define('app-speaker-card-agustina-orellana', AppSpeakerCardAgustinaOrellana)