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
                <div id="Contractia" class="sponsors-item">
                <app-sponsors-link
                  href="https://contractia.io/" src="static/images/sponsors/contactia.jpeg"" clase="sponsors-item-img" >
                </app-sponsors-link>
                <div class="sponsors-texto">
                Contractia es la plataforma web multi-dispositivo para la gestión y firma electrónica de documentos digitales         
                </div>
                </div>
                
    `;
  }
}
customElements.define('app-sponsors-row-2', AppSponsorsRow2);