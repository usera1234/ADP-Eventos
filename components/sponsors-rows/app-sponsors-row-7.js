import './app-sponsors-links.js'

class AppSponsorsRow7 extends HTMLElement {
  constructor() {
    super();
    
    this.innerHTML = `
              <div class="sponsors-grid">
                <div id="JusLab" class="sponsors-item">
                <app-sponsors-link
                  href="https://juslab.com.ar/" src="static/images/sponsors/juslab.jpeg"" clase="sponsors-item-img" estilo="">
                </app-sponsors-link>
                <div class="sponsors-texto">
                JusLab, laboratorio de innovacion judicial.
                </div>
                </div> 
                <div id="Alta" class="sponsors-item">
                <app-sponsors-link
                  href="https://altargentina.tech/" src="static/images/sponsors/alta.png"" clase="sponsors-item-img" estilo="width:250px">
                </app-sponsors-link>
                <div class="sponsors-texto">
                Alta, impulsores de legaltech en argentina.
                </div>
                </div>   
              </div>
              <!--<div id="ialab" class="sponsors-item">
                <app-sponsors-link
                  href="https://ialab.com.ar/" src="static/images/sponsors/ialab.png"" clase="sponsors-item-img" estilo="width:250px">
                </app-sponsors-link>
                <div class="sponsors-texto">
                IaLab, Universidad de Buenos Aires.
                </div>
                </div> --!>
    `;
  }
}
customElements.define('app-sponsors-row-7', AppSponsorsRow7);

