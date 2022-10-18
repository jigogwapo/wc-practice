import {LitElement, html, css} from 'lit';

export class Player extends LitElement {
  static styles = css`
    .player {
      height: 40px;
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .up {
      border-radius: 10px 10px 0 0;
      background-color: #bfdbf7;
      border-bottom: 1px solid #1f7a8c;
    }

    .down {
      border-radius: 0 0 10px 10px;
      background-color: #bfdbf7;
      border-top: 1px solid #1f7a8c;
    }
  `;

  static get properties() {
    return {
      name: {type: String},
      isUpPlayer: {type: Boolean, attribute: 'is-up-player'},
      roundsData: {type: Array},
      roundNum: {type: Number},
      matchNum: {type: Number},
      playerNum: {type: Number},
      glow: {type: Boolean},
      win: {type: Boolean},
    };
  }

  render() {
    return html` <div
      class="${this.isUpPlayer ? 'up player' : 'down player'} ${this.glow
        ? 'glow'
        : ''} ${this.win ? 'win' : ''}"
    >
      ${this.name}
    </div>`;
  }
}

customElements.define('player-elem', Player);
