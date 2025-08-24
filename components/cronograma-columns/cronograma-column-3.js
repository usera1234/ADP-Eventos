class AppCronogramaColumn3 extends HTMLElement {
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
                    <div class="cronograma-hora">19:30 HS</div>
                    <div class="cronograma-linea"></div>
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Sorteo de Beneficios</div>
                    <div class="cronograma-subtitulo"></div>
                    <div class="cronograma-info-extra">
                    <p>Detalle completo de las acreditaciones. Vení con DNI. Horario de 17 a 18 hs en el segundo piso. Lorem ipsum dolor sit amet.</p>
                    </div>
                    </div>
                </div>
                    <div id="overlay"></div>
                <div class="cronograma-item">
                    <div class="cronograma-hora">19:40 HS</div>
                    <div class="cronograma-linea"></div>
                    <div class="cronograma-texto">
                    <div class="cronograma-titulo">Cierre Institucional</div>
                    <div class="cronograma-subtitulo">SALÓN AUDITORIO- 1ER PISO<br>AGUSTÍN PESCE</div>
                    <div class="cronograma-info-extra">
                    <p>Detalle completo de las acreditaciones. Vení con DNI. Horario de 17 a 18 hs en el segundo piso. Lorem ipsum dolor sit amet.</p>
                    </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-cronograma-column-3', AppCronogramaColumn3);