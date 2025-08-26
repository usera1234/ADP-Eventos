class AppCo13 extends HTMLElement {
     constructor() {
         super(); 
         
         this.innerHTML = `
                <div class="organizadores-grid">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="static/images/speakers-cards/agustin-pesce.jpeg" alt="Nombre Persona">
                            <h3>Agustin Pesce</h3>
                        </div>
                        <div class="flip-card-back">
                            <img src="static/images/speakers-cards/agustin-pesce.jpeg" class="blur-img" alt="Nombre Persona">
                            <div class="flip-card-content">
                            <h3>Agustin Pesce</h3>
                            <p>Cargo o descripción breve.</p>
                            <a href="https://www.linkedin.com/in/agustinpesce/" target="_blank">LinkedIn</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
         `;
     }
 }
customElements.define('app-co-13', AppCo13);