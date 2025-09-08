class AppCronogramaRow8 extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div class="cronograma-row-speakers"> 
                <div id="overlay"></div>
                <div class="cronograma-item-speakers">
                    <div class="cronograma-hora-speaker">18:30 HS</div>
                    <div class="cronograma-linea"></div>
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Beatriz Torres:</div>
                    </div>
                </div>
                <div id="overlay"></div>
                <div class="cronograma-item-speakers">
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">CPACF Guía IA</div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-cronograma-row-8', AppCronogramaRow8);