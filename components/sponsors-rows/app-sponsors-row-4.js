class AppSponsorsRow4 extends HTMLElement {
  constructor() {
    super();
    
    this.innerHTML = `
            <div class="sponsors-grid">
                <div id="nombre-empresa" class="sponsors-item">
                <app-sponsors-link
                  href="https://www.lucerolabs.xyz/" src="static/images/sponsors/lucerolabs.png" clase="sponsors-item-img" estilo="width: 170px; height: 90px">
                </app-sponsors-link>                
                <div class="sponsors-texto">
                Lucero Labs, Revolutionizing Public Key Infrastructure with blockchain, offering robust digital signing and identity solutions.
                </div>
                </div>
                <div id="nombre-empresa" class="sponsors-item">
                <app-sponsors-link
                  href="https://iurem.com/" src="static/images/sponsors/lurem.png" clase="sponsors-item-img">
                </app-sponsors-link>
                <div class="sponsors-texto">
                Lurem, el software legal <br>más versátil del mercado.
                </div>
                </div>
                <div id="nombre-empresa" class="sponsors-item">
                <app-sponsors-link
                  href="https://www.escribanodigital.com/" src="static/images/sponsors/escribanodigital.jpeg" clase="sponsors-item-img">
                </app-sponsors-link>
                <div class="sponsors-texto">
                Escribano digital, Soluciones para <br>el procesamiento y gestión de <br>documentos digitales seguros
                </div>
                </div>
            </div>
    `;
  }
}
customElements.define('app-sponsors-row-4', AppSponsorsRow4);