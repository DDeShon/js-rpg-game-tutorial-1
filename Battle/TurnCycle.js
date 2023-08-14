class TurnCycle {
  constructor({ battle, onNewEvent }) {
    this.battle = battle;
    this.onNewEvent = onNewEvent;
    this.currentTeam = "player"; // or "enemy"
  }

  async turn() {}

  init() {}
}
