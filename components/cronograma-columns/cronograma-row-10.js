class AppCronogramaRow10 extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div class="cronograma-row-speakers"> 
                <div id="overlay"></div>
                <div class="cronograma-item-speakers">
                    <div class="cronograma-hora-speaker">18:15 HS</div>
                    <div class="cronograma-linea"></div>
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Ricardo Guerra:</div>
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
                    <div class="cronograma-titulo">Roger Arias:</div>
                    </div>
                </div>
                <div id="overlay"></div>
                <div class="cronograma-item-speakers">
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">ArteClaw</div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-cronograma-row-10', AppCronogramaRow10);