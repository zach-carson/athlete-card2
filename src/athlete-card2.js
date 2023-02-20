import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";


export class AthleteCard2 extends LitElement {
  
  static get properties() {
    return {
      name: {
        type: String,
        reflect: true
      },
      position: {
        type: String,
      }
    }
  }

  static get styles() {
    return css `
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
          <h2><slot>${this.name}</slot></h2>
          <h3><slot>${this.position}</slot></h3>
        </div>
        <meme-maker class = "img" alt = "athlete" image-url="https://th.bing.com/th/id/OIP.NX-MOMDx5uAkx4YnlPWexAHaE7?pid=ImgDet&rs=1" top-text=${this.toptext} bottom-text=${this.bottomtext}>
        </meme-maker>
        <p class = "desc"> Jalen Hurts is a football player </p>
        <details class="details">
        <summary>${this.detailslabel}</summary>
        <div>
          <ul>
            <li>${this.stats}</li>
          </ul>
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