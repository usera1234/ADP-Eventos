class AppCronogramaColumn2 extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div class="cronograma-column"> 
                <div id="overlay"></div>
                <div class="cronograma-item">
                <div class="cronograma-hora">18:30 HS</div>
                <div class="cronograma-linea"></div>
                <div class="cronograma-texto">
                    <div class="cronograma-titulo">LANZAMIENTO OFICIAL<br>GUÍA IA PARA ABOGADOS</div>
                    <div class="cronograma-subtitulo">LABORATORIO INNOVACION CPACF</div>
                    <div class="cronograma-info-extra">
                    <p>Detalle completo de las acreditaciones. Vení con DNI. Horario de 17 a 18 hs en el segundo piso. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                </div>
                <div id="overlay"></div>
                <div class="cronograma-item">
                <div class="cronograma-hora">18:30 HS</div>
                <div class="cronograma-linea"></div>
                <div class="cronograma-texto">
                    <div class="cronograma-titulo">LANZAMIENTO OFICIAL<br>GUÍA IA PARA ABOGADOS</div>
                    <div class="cronograma-subtitulo">LABORATORIO INNOVACION CPACF</div>
                    <div class="cronograma-info-extra">
                    <p>Detalle completo de las acreditaciones. Vení con DNI. Horario de 17 a 18 hs en el segundo piso. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                </div>
                <div id="overlay"></div>
                <div class="cronograma-item">
                <div class="cronograma-hora">18:45 HS</div>
                <div class="cronograma-linea"></div>
                <div class="cronograma-texto">
                    <div class="cronograma-titulo">Exposiciones Legaltech</div>
                    <div class="cronograma-subtitulo"></div>
                    <div class="cronograma-info-extra">
                    <p>Detalle completo de las acreditaciones. Vení con DNI. Horario de 17 a 18 hs en el segundo piso. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-cronograma-column-2', AppCronogramaColumn2);