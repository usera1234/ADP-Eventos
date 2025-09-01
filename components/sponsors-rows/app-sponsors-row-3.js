class AppSponsorsRow3 extends HTMLElement {
  constructor() {
    super();
    
    this.innerHTML = `
            <div class="sponsors-grid">
                <div id="DoctIA" class="sponsors-item">
                <app-sponsors-link
                  href="https://beta.doctia.com.ar/" src="static/images/sponsors/doctia.png" clase="sponsors-item-img">
                </app-sponsors-link>
                <div class="sponsors-texto">
                    DoctIA utiliza algoritmos de Procesamiento del Lenguaje potenciados por IA para ofrecerte precedentes relacionados con el texto en el que estás trabajando.
                </div>
                </div>
                <div id="Thomson-Reuters" class="sponsors-item">
                <app-sponsors-link
                  href="https://app.ubuntulaw.com/login" src="static/images/sponsors/ubuntulaw.png"" clase="sponsors-item-img">
                </app-sponsors-link>
                <div class="sponsors-texto">
                Ubuntulaw es un software que centraliza toda la práctica legal en un sólo lugar, permitiendo hacer el seguimiento de expedientes de todo tu equipo, de manera ágil y efectiva.
                </div>
                </div>
                <div id="nombre-empresa" class="sponsors-item">
                <app-sponsors-link
                  href="https://www.eldial.com/nuevo/nuevo_diseno/v2/index.asp" src="static/images/sponsors/eldial.png"" clase="sponsors-item-img">
                </app-sponsors-link>
                <div class="sponsors-texto">
                ElDial se especializa en la prestación de servicios de información y formación jurídica, generando contenidos de actualidad y calidad, a miles de profesionales del Derecho.
                </div>
                </div>
            </div>
    `;
  }
}
customElements.define('app-sponsors-row-3', AppSponsorsRow3);