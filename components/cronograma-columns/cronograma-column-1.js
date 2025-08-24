class AppCronogramaColumn1 extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div class="cronograma-column"> 
                <div id="overlay"></div>
                <div class="cronograma-item">
                    <div class="cronograma-hora">17:00 HS</div>
                    <div class="cronograma-linea"></div>
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Acreditaciones</div>
                    <div class="cronograma-subtitulo">2do Piso</div>
                    <div class="cronograma-info-extra">
                    <p>Detalle completo de las acreditaciones. Vení con DNI. Horario de 17 a 18 hs en el segundo piso. Lorem ipsum dolor sit amet.</p>
                    </div>
                    </div>
                </div>
                <div id="overlay"></div>
                <div class="cronograma-item">
                    <div class="cronograma-hora">17:15 HS</div>
                    <div class="cronograma-linea"></div>
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Apertura Institucional</div>
                    <div class="cronograma-subtitulo">2do Piso<br>DR. RICARDO GIL LAVEDRA <br>DRA.BEATRIZ TORRES</div>
                    <div class="cronograma-info-extra">
                    <p>Detalle completo de las acreditaciones. Vení con DNI. Horario de 17 a 18 hs en el segundo piso. Lorem ipsum dolor sit amet.</p>
                    </div>
                    </div>
                </div>
                <div id="overlay"></div>
                <div class="cronograma-item">
                    <div class="cronograma-hora">17:30 HS</div>
                    <div class="cronograma-linea"></div>
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Exposiciones Legaltech</div>
                    <div class="cronograma-subtitulo">2do Piso</div>
                    <div class="cronograma-info-extra">
                    <p>Detalle completo de las acreditaciones. Vení con DNI. Horario de 17 a 18 hs en el segundo piso. Lorem ipsum dolor sit amet.</p>
                    </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-cronograma-column-1', AppCronogramaColumn1);