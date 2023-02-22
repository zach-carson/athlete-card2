import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const image = new URL('../assets/jalen.jpg', import.meta.url).href;
export class AthleteCard2 extends LitElement {
  
  static get properties() {
    return {
      name: {
        type: String,
        reflect: true
      },
      position: {
        type: String,
      },
      newcolor: {
        type: String,
        reflect: true,
        attribute: 'newcolor'
      }
    }
  }

  static get styles() {
    return css `

    :host([newcolor="blue"]) .card {
      background-color: blue;
      color: white;
    }


    .card
    {
      background-color: grey;
      border: solid black;
      width: 400px;
      display: inline-flex;
    }
    
    .btn { 
      border: 2px solid blue;
      text-transform: uppercase;
      padding: 2px 2px;
      background-color: white;
      font-size: 12px;
      text-align: center;
      margin: auto;
      display: flex;
      display: center;
    }
    
    .title-header
    {
      text-align: center;
    }
    
    .desc
    {
      text-align: center;
      display: none;
    }
    
    
    @media screen and (min-width: 500px) and (max-width: 800px)
    {
      .btn
      {
        display: none;
      }
    }
    
    @media screen and (max-width: 500px)
    {
      
      .card
      {
        scale: 0.7;
      }
      
      .img
      {
        scale: 0.6;
      }
     
    }
    
    .img {
      width: 400px;
    }
    
    .duplicate:hover {
      background-color: yellow;
    }
    
    .duplicate:focus {
      background-color: yellow;
    }
    
    
    
    
    `;
  }

  constructor() {
    super();
    this.newcolor = "blue";
    this.name = 'Jalen Hurts';
    this.position = 'Quarterback';
    this.stats = 'Lost Super Bowl 57';
    this.toptext = "Jalen";
    this.bottomtext = "Hurts";
    this.detailslabel = "Career Stats";
    this.detailsbutton = "Details";
  }

  render() {
    return html`
   
      <div class="card" id="card1">
        <div>
        <div class="title-header">
          <h2>${this.name}</h2>
          <h3>${this.position}</h3>
        </div>
        <meme-maker class = "img" alt = "athlete" image-url=${image} top-text=${this.toptext} bottom-text=${this.bottomtext}>
        </meme-maker>
        <p class = "desc"> Jalen Hurts is a football player </p>
        <details class="details">
        <summary>${this.detailslabel}</summary>
        <div>
          <slot></slot>
        </div>
        </details>
        <a href="https://hax.psu.edu/">
        <button class="btn" id='details'>${this.detailsbutton}</button>
        </a>
      </div>
      </div>
    `;
  }
}

customElements.define('athlete-card2', AthleteCard2);