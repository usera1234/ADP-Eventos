class AppCronogramaRow13 extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div class="cronograma-row-speakers"> 
                <div id="overlay"></div>
                    <div class="cronograma-item-speakers">
                        <div class="cronograma-hora-speaker">19:45 HS</div>
                        <div class="cronograma-linea"></div>
                        <div class="cronograma-texto">
                        <div class="cronograma-titulo">Cierre:</div>
                        </div>
                    </div>
                <div id="overlay"></div>
                    <div class="cronograma-item-speakers">
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Agustin Pesce</div>
                    </div>
                </div>
                <div id="overlay"></div>
                    <div class="cronograma-item-speakers">
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Laboratorio FLT</div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-cronograma-row-13', AppCronogramaRow13);