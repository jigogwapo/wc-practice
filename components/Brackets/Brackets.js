import {LitElement, html} from 'lit';

export class Brackets extends LitElement {
  static get properties() {
    roundsData: {
      type: Array;
    }
  }

  renderedRounds = html` ${this.roundsData.map((roundData, idx) => (
    <Round
      roundNum={idx + 1}
      key={idx}
      roundsData={roundsData}
      roundData={roundData}
      setRoundsData={setRoundsData}
    />
  ))}`;

  render() {
    return html`<div id="brackets-container">${this.renderedRounds}</div> `;
  }
}
