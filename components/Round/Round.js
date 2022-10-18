import {LitElement, html} from 'lit';

export class Round extends LitElement {
  static get properties() {
    return {
      roundNum: {type: Number},
      roundsData: {type: Array},
      roundData: {type: Object},
    };
  }

  render() {
    return;
  }
}

customElements.define('round-elem', Round);
