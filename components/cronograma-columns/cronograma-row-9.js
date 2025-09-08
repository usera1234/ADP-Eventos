class AppCronogramaRow9 extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div class="cronograma-row-speakers"> 
                <div id="overlay"></div>
                <div class="cronograma-item-speakers">
                    <div class="cronograma-hora-speaker">18:45 HS</div>
                    <div class="cronograma-linea"></div>
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Débora Ferraro:</div>
                    </div>
                </div>
                <div id="overlay"></div>
                <div class="cronograma-item-speakers">
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Dropbox</div>
                    </div>
                </div>
                <div id="overlay"></div>
                <div class="cronograma-item-speakers">
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Sebastian Invernizzi:</div>
                    </div>
                </div>
                <div id="overlay"></div>
                <div class="cronograma-item-speakers">
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Escribano Digital</div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-cronograma-row-9', AppCronogramaRow9);