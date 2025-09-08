class AppCronogramaRow12 extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div class="cronograma-row"> 
                <div id="overlay"></div>
                <div class="cronograma-row">
                  <div id="overlay"></div>
                  <div class="cronograma-item-acreditaciones">
                  <div class="cronograma-hora-acreditaciones">19:30 HS</div>
                  <div class="cronograma-linea-acreditaciones"></div>
                  <div class="cronograma-texto">
                  <div class="cronograma-titulo">Sorteo de Premios</div>
                  <div class="cronograma-subtitulo">2do Piso</div>
                  <div class="cronograma-info-extra">
                  <p>Detalle completo de las acreditaciones. Vení con DNI. Horario de 17 a 18 hs en el segundo piso. Lorem ipsum dolor sit amet.</p>
                  </div>
                  </div>
                  </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-cronograma-row-12', AppCronogramaRow12);