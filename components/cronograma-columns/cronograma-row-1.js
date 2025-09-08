class AppCronogramaRow1 extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div class="cronograma-row"> 
                <div id="overlay"></div>
                <div class="cronograma-row">
                  <div id="overlay"></div>
                  <div class="cronograma-item-acreditaciones">
                  <div class="cronograma-hora-acreditaciones">17:00 HS</div>
                  <div class="cronograma-linea-acreditaciones"></div>
                  <div class="cronograma-texto">
                  <div class="cronograma-titulo">Acreditaciones</div>
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

customElements.define('app-cronograma-row-1', AppCronogramaRow1);