class AppCo21 extends HTMLElement {
     constructor() {
         super(); 
         
         this.innerHTML = `
                <div class="organizadores-grid">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="static/images/speakers-cards/agustina-orellana.jpg" alt="Nombre Persona">
                            <h3>Agustina Orellana</h3>
                        </div>
                        <div class="flip-card-back">
                            <img src="static/images/speakers-cards/agustina-orellana.jpg" class="blur-img" alt="Nombre Persona">
                            <div class="flip-card-content">
                            <h3>Agustina Orellana</h3>
                            <p>Cargo o descripción breve.</p>
                            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHzi27MuClbJwAAAZkrpnPoRGAoZbEWX-9p7tXnoqcyZehJXN0S7LcwSpZuyOP36TlbARk4szS8KPnQIxRe3YlUnMGrpDUVKoGe4TXSDcnPtf8R6tcB2MGm47PKt-vYi7WOBK0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmagustinaorellana%2F" target="_blank">LinkedIn</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
         `;
     }
 }
customElements.define('app-co-21', AppCo21);