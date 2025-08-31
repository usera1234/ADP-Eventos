class AppCo12 extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
                <div class="organizadores-grid">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="static/images/speakers-cards/beatriz-torres.jpeg" alt="Nombre Persona">
                            <h3>Beatriz Torres</h3>
                        </div>
                        <div class="flip-card-back">
                            <img src="static/images/speakers-cards/beatriz-torres.jpeg" class="blur-img" alt="Nombre Persona">
                            <div class="flip-card-content">
                            <h3>Beatriz Torres</h3>
                            <p>Consejera del CPACF y titular <br>de la Unidad de Innovacion<br> y Transformación Digital.</p>
                            <a href="https://www.linkedin.com/in/beatriz-torres-1ba157258/" target="_blank">LinkedIn</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        `;
    }
}
customElements.define('app-co-12', AppCo12);