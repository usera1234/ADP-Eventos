class AppCronogramaRow2 extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
                <div class="cronograma-row">
                 <div id="overlay"></div>
                 <div class="cronograma-item-apertura">
                  <div class="cronograma-hora-apertura">17:15 HS</div>
                  <div class="cronograma-linea-apertura"></div>
                  <div class="cronograma-texto">
                  <div class="cronograma-titulo">Apertura</div>
                  <div class="cronograma-subtitulo">2do Piso</div>
                  <div class="cronograma-info-extra">
                  <p>Detalle completo de las acreditaciones. Vení con DNI. Horario de 17 a 18 hs en el segundo piso. Lorem ipsum dolor sit amet.</p>
                  </div>
                  </div>
                  </div>  
                  <div id="overlay"></div>
                  <div class="cronograma-item-apertura">
                  <div class="cronograma-texto">
                  <div class="cronograma-titulo">Ricardo Gil Lavedra</div>
                  <div class="cronograma-subtitulo">Presidente CPACF</div>
                  <div class="cronograma-info-extra">
                  <p>Detalle completo de las acreditaciones. Vení con DNI. Horario de 17 a 18 hs en el segundo piso. Lorem ipsum dolor sit amet.</p>
                  </div>
                  </div>
                  </div> 
                </div>
        `;
    }
}

customElements.define('app-cronograma-row-2', AppCronogramaRow2);