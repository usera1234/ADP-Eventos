import './speakers-rows/app-speaker-row-1.js'
import './speakers-rows/app-speaker-row-2.js'
import './speakers-rows/app-speaker-row-3.js'
import './speakers-rows/app-speaker-row-4.js'
import './speakers-rows/app-speaker-row-5.js'

class AppSpeakers extends HTMLElement {
    constructor(){
        super();

        this.innerHTML = `
            <div id="speakers" class="speakers">
                <div class="speakers-header">
                    <div class="speakers-line" style="background-color:#2a8dbe; height: 150px; opacity: 0.4;"">
                        <div class="speakers-titulo">Speakers</div>
                    </div>
                    <div class="speakers-line" style="width: 50%"></div>
                </div>
                <div class="speakers-grid">

                    <app-speaker-row-1 id="speaker-row-1"></app-speaker-row-1>

                    <app-speaker-row-2 id="speaker-row-2"></app-speaker-row-2>

                    <app-speaker-row-3 id="speaker-row-3"></app-speaker-row-3>

                    <app-speaker-row-4 id="speaker-row-4"></app-speaker-row-4>

                    <app-speaker-row-5 id="speaker-row-5"></app-speaker-row-5>
                </div>
            </div>
        `;
    }

    connectedCallback() {
    // objetivos
    const header = this.querySelector('.speakers-header');
    const row1   = this.querySelector('#speaker-row-1');
    const row2   = this.querySelector('#speaker-row-2');
    const row3   = this.querySelector('#speaker-row-3');
    const row4   = this.querySelector('#speaker-row-4');
    const row5   = this.querySelector('#speaker-row-5');

    const targets = [header, row1, row2, row3, row4, row5].filter(Boolean);

    // estado inicial oculto (evita "flash" sin animar)
    targets.forEach(el => el.classList.add('reveal'));

    // observar y animar SOLO una vez
    this._io = new IntersectionObserver((entries, io) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animar-speakers');
            entry.target.classList.remove('reveal');
            io.unobserve(entry.target);           // ← no se repite
        }
        });
    }, { threshold: 0.2 }); // ~20% visible

    targets.forEach(t => this._io.observe(t));
    }

    disconnectedCallback() {
    this._io?.disconnect();
    }
}

customElements.define('app-speakers', AppSpeakers);