class AppCronogramaRow5 extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div class="cronograma-row-speakers"> 
                <div id="overlay"></div>
                <div class="cronograma-item-speakers">
                    <div class="cronograma-hora-speaker">17:45 HS</div>
                    <div class="cronograma-linea"></div>
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Florencia Singla:</div>
                    </div>
                </div>
                <div id="overlay"></div>
                <div class="cronograma-item-speakers">
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">UbuntuLaw</div>
                    </div>
                </div>
                <div id="overlay"></div>
                <div class="cronograma-item-speakers">
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">David Mielnik:</div>
                    </div>
                </div>
                <div id="overlay"></div>
                <div class="cronograma-item-speakers">
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">DoctIa</div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-cronograma-row-5', AppCronogramaRow5);