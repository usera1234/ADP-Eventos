class AppCronogramaRow3 extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div class="cronograma-row"> 
                <div id="overlay"></div>
                <div class="cronograma-item-escenarios">
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Escenario A:</div>
                    </div>
                </div>
                <div id="overlay"></div>
                <div class="cronograma-item-escenarios">
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Escenario B:</div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-cronograma-row-3', AppCronogramaRow3);