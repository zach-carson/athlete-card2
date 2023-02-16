import { LitElement, html, css } from 'lit';

export class AthleteCard2 extends LitElement {
  
  static get properties() {
    return {
      version: {
        type: String,
        reflect: true
      }
    }
  }

  static get styles() {
    return css `
      :host {
        font-size: 2em;
      }
    `;
  }

  constructor() {
    super();
    this.version = 'STARTING';
  }

  render() {
    return html`
    <button class="duplicate"> Duplicate card </button>

<button class="newcolor"> Toggle background color </button>
  
<button class="something"> Something else </button>
  
<button class="delete"> Delete last card </button>

<div class="card" id="card1">
  <div>
  <div class="title-header">
    <h2> Jalen Hurts </h2>
  </div>
  <img class = "img" src="https://th.bing.com/th/id/OIP.NX-MOMDx5uAkx4YnlPWexAHaE7?pid=ImgDet&rs=1" alt="jalen hurts">
  <p class = "desc"> Jalen Hurts is a football player </p>
  <!--<a href="https://hax.psu.edu/">-->
  <button class="btn" id='details'> Details </button>
  </a>
</div>
</div>
    `;
  }
}

customElements.define('athlete-card2', AthleteCard2);