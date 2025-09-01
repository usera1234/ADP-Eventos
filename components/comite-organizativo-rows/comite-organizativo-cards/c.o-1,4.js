class AppCo14 extends HTMLElement {
    constructor() {
        super(); 
      
        this.innerHTML = `
                <div class="organizadores-grid">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="static/images/speakers-cards/nicolas-caballero.jpeg" alt="Nombre Persona">
                            <h3>Nicolas Caballero</h3>
                        </div>
                        <div class="flip-card-back">
                            <img src="static/images/speakers-cards/nicolas-caballero.jpeg" class="blur-img" alt="Nombre Persona">
                            <div class="flip-card-content">
                            <h3>Nicolas Caballero</h3>
                            <p>Abogado. Martillero Público <br>y Corredor Inmobiliario.</p>
                            <a href="https://www.linkedin.com/in/nicolas-caballero-766941230/" target="_blank">LinkedIn</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        `;
    }
}
customElements.define('app-co-14', AppCo14);