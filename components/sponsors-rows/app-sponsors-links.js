class AppSponsorsLink extends HTMLElement {
  connectedCallback() {
    const href  = this.getAttribute('href')  || 'https://www.linkedin.com/';
    const label = this.getAttribute('label') || '';

    const src = this.getAttribute('src') || '';
    const clase = this.getAttribute('clase') || '';
    const estilo = this.getAttribute('estilo') || '';

    this.innerHTML = `
      <a class="speakers-linkedin"
         href="${href}" "target="_blank" rel="noopener">
        <img src="${src}" class="${clase}" style="${estilo}">
        ${label}
      </a>
    `;
  }
}
customElements.define('app-sponsors-link', AppSponsorsLink);
