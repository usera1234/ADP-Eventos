import './app-sponsors-links.js'

class AppSponsorsRow6 extends HTMLElement {
  constructor() {
    super();
    
    this.innerHTML = `
              <div class="sponsors-grid">
                <div id="ialab" class="sponsors-item">
                <app-sponsors-link
                  href="https://ialab.com.ar/" src="static/images/sponsors/ialab.png"" clase="sponsors-item-img" estilo="width:200px">
                </app-sponsors-link>
                <div class="sponsors-texto">
                IaLab, Universidad de Buenos Aires.
                </div>
                </div>   
                <div id="jurisprudenciaarg" class="sponsors-item">
                <app-sponsors-link
                  href="https://jurisprudenciaarg.com/" src="static/images/sponsors/jurisprudenciaarg.jpeg"" clase="sponsors-item-img" >
                </app-sponsors-link>
                <div class="sponsors-texto">
                Jurisprudencia ARG, Tu asistente para buscar fallos en segundos.
                </div>
                </div>
              </div>
    `;
  }
}
customElements.define('app-sponsors-row-6', AppSponsorsRow6);