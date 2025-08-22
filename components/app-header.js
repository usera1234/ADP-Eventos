class AppHeader extends HTMLElement {
    constructor(){
        super();

        this.innerHTML = `
          <header id="barra-header">
            <div class="header-container">
            <img id="logo-header"
                src="static/images/logo-ABOGACIA-ByN.png"
                alt="LOGO ADP O EVENTOS"
                class="logo-header">

            <nav class="nav-links">
                <!-- 5) data-target indica a qué sección del index scrollear -->
                <button class="btn" data-target="#agenda">Cronograma</button>
                <button class="btn" data-target="#speakers">Speakers</button>
                <button class="btn" data-target="#Comite-organizativo">Comité organizador</button>
                <button class="btn" data-target="#sponsors">Sponsors</button>
                <button class="btn" data-target="#legaltech">Empresas LegalTech</button>
            </nav>
            </div>
          </header>
    `;
    }

    connectedCallback() {
         const header = this.querySelector('#barra-header');
    const logo   = this.querySelector('#logo-header');

    this._animado = false;
    this._logoAnimado = false;

    const esCelular = window.innerWidth < 768;

    if (!esCelular) {
      this._onScroll = () => {
        const scrollPos = window.scrollY;

        if (scrollPos > 50 && !this._animado) {
          header.style.position = 'fixed';
          header.style.top = '0';
          header.style.left = '0';
          header.style.width = '100%';
          header.style.zIndex = '1000';
          this._animado = true;
          header.classList.remove('animarHeader');
          void header.offsetWidth;                
          header.classList.add('animarHeader');
        }

        if (scrollPos <= 50 && this._animado) {
          this._animado = false;
          header.classList.remove('animarHeader');
          header.style.position = 'relative';
          header.style.top = '';
          header.style.left = '';
          header.style.width = '';
          header.style.zIndex = '';
        }

        if (scrollPos > 50 && !this._logoAnimado) {
          logo.style.marginLeft = '-100px';
          logo.classList.add('achicarLogo');
          this._logoAnimado = true;
        }

        if (scrollPos <= 50 && this._logoAnimado) {
          logo.classList.remove('achicarLogo');
          this._logoAnimado = false;
          logo.style.marginLeft = '0px';
        }
      };

      window.addEventListener('scroll', this._onScroll, { passive: true });
    }

    this.querySelectorAll('.btn[data-target]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sel = btn.getAttribute('data-target');
        if (!sel) return;
        const el = document.querySelector(sel);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  disconnectedCallback() {
    if (this._onScroll) window.removeEventListener('scroll', this._onScroll);
  }
}

customElements.define('app-header', AppHeader);

