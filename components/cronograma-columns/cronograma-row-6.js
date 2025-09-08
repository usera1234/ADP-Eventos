class AppCronogramaRow6 extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div class="cronograma-row-speakers"> 
                <div id="overlay"></div>
                <div class="cronograma-item-speakers">
                    <div class="cronograma-hora-speaker">18:00 HS</div>
                    <div class="cronograma-linea"></div>
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Leo Limansky:</div>
                    </div>
                </div>
                <div id="overlay"></div>
                <div class="cronograma-item-speakers">
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Jurisprudensia Arg</div>
                    </div>
                </div>
                <div id="overlay"></div>
                <div class="cronograma-item-speakers">
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Mariano Jaramillo:</div>
                    </div>
                </div>
                <div id="overlay"></div>
                <div class="cronograma-item-speakers">
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Meta Juridico</div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-cronograma-row-6', AppCronogramaRow6);