class AppSponsorsRow2 extends HTMLElement {
  constructor() {
    super();
    
    this.innerHTML = `
            <div class="sponsors-grid">
                <div id="LegalRun" class="sponsors-item">
                <app-sponsors-link
                  href="https://legalrun.tech/" src="static/images/sponsors/logo-legalrun.png" clase="sponsors-item-img">
                </app-sponsors-link>
                <div class="sponsors-texto">
                La solución robótica de seguimiento y gestión de causas judiciales más revolucionaria de LATAM.
                </div>
                </div>
                <div id="Thomson-Reuters" class="sponsors-item">
                <app-sponsors-link
                  href="https://www.thomsonreuters.com.ar/es.html" src="static/images/sponsors/thomson-reuters.png" clase="sponsors-item-img" estilo="width:200px">
                </app-sponsors-link>
                <div class="sponsors-texto">
                Thomson Reuters Argentina, líderes mundiales en información y soluciones para empresas y profesionales. 
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
customElements.define('app-sponsors-row-2', AppSponsorsRow2);