import './app-sponsors-links.js'

class AppSponsorsRow9 extends HTMLElement {
  constructor() {
    super();
    
    this.innerHTML = `
              <div class="sponsors-grid">
                <div id="MiReclamo" class="sponsors-item">
                <app-sponsors-link
                  href="https://mireclamo.juscaba.gob.ar/login" src="static/images/sponsors/mi-reclamo.png"" clase="sponsors-item-img" estilo="width:250px;">
                </app-sponsors-link>
                <div class="sponsors-texto">
                Mi Reclamo, sistema de Conciliacion de la Justicia en las relaciones de consumo. CABA.
                </div>
                </div> 
                <div id="JustiBot" class="sponsors-item">
                <app-sponsors-link
                  href="https://consejo.jusbaires.gob.ar/noticias/lanzamiento-de-justibot-inteligente/" src="static/images/sponsors/justibot.jpg"" clase="sponsors-item-img" estilo="">
                </app-sponsors-link>
                <div class="sponsors-texto">
                Justibot, chatbot inteligente del consejo de la magistratura CABA.
                </div>
                </div>
                <div id="PortalDelLitigante" class="sponsors-item">
                <app-sponsors-link
                  href="https://jusbairesabierto.gob.ar/portal-del-litigante-la-inscripcion-para-abogados-que-moderniza-el-servicio-de-justicia/" src="static/images/sponsors/portal-del-litigante.jpg"" clase="sponsors-item-img" estilo="">
                </app-sponsors-link>
                <div class="sponsors-texto">
                Portal del Litigante, sistema de gestion de expedientes judiciales del consejo de la majistratura CABA.
                </div>
                </div>
              </div>
    `;
  }
}
customElements.define('app-sponsors-row-9', AppSponsorsRow9);