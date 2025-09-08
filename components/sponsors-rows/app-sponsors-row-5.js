import './app-sponsors-links.js'

class AppSponsorsRow5 extends HTMLElement {
  constructor() {
    super();
    
    this.innerHTML = `
            <div class="sponsors-grid">
                <div id="DoctIA" class="sponsors-item">
                <app-sponsors-link
                  href="https://arteclaw.com/es" src="static/images/sponsors/arteclaw.png" clase="sponsors-item-img">
                </app-sponsors-link>
                <div class="sponsors-texto">
                  ArteClaw, Streamline operations, <br>automate processes, and enhance efficiency<br> to transform how legal teams work 
                </div>
                </div>
                <div id="Thomson-Reuters" class="sponsors-item">
                <app-sponsors-link
                  href="https://legalify.app/" src="static/images/sponsors/legalify.jpeg"" clase="sponsors-item-img" >
                </app-sponsors-link>
                <div class="sponsors-texto">
                Legalify, Es la única plataforma global de servicios profesionales especializados y calificados por los usuarios que vincula de manera transparente al profesional con su cliente.
                </div>
                </div>
                <div id="metajuridico" class="sponsors-item">
                <app-sponsors-link
                  href="https://metajuridico.com/?gad_source=1&gad_campaignid=21042837108&gbraid=0AAAAAqsBFZmIILLsKpI3zhNGrCZ6YGlSR&gclid=CjwKCAjwlOrFBhBaEiwAw4bYDc1SMHsLxRRSbU2S03sHTH4B6GotT2UU7HSkKlYVyswfBCNCkuQTdxoCmZcQAvD_BwE" src="static/images/sponsors/metajuridico.jpeg"" clase="sponsors-item-img" >
                </app-sponsors-link>
                <div class="sponsors-texto">
                Metajuridico, Administra de forma remota las tareas, honorarios y agenda con el máximo detalle y control. Realiza cálculos indemizatorios en segundos. Envía mensajes a tus clientes con recordatorios. Genera reportes precisos y ¡mucho más!
                </div>
                </div>
            </div>
    `;
  }
}
customElements.define('app-sponsors-row-5', AppSponsorsRow5);