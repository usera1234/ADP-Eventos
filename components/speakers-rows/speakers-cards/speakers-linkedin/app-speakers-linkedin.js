class AppSpeakerLinkedin extends HTMLElement {
  connectedCallback() {
    const href  = this.getAttribute('href')  || 'https://www.linkedin.com/';
    const label = this.getAttribute('label') || '';

    this.innerHTML = `
      <a class="speakers-linkedin"
         href="${href}" target="_blank" rel="noopener">
        <img src="/static/images/linkedin.png"
             alt="LinkedIn" style="width:50px;height:50px;">
        ${label}
      </a>
    `;
  }
}
customElements.define('app-speakers-linkedin', AppSpeakerLinkedin);
