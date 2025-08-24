class AppCo22 extends HTMLElement {
     constructor() {
         super(); 
         
         this.innerHTML = `
                <div class="organizadores-grid">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="static/images/ezequielD.jpg" alt="Nombre Persona">
                            <h3>Nombre Persona</h3>
                        </div>
                        <div class="flip-card-back">
                            <img src="static/images/ezequielD.jpg" class="blur-img" alt="Nombre Persona">
                            <div class="flip-card-content">
                            <h3>Nombre Persona</h3>
                            <p>Cargo o descripción breve.</p>
                            <a href="static/images/ezequielD.jpg" target="_blank">LinkedIn</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
         `;
     }
 }
customElements.define('app-co-22', AppCo22);