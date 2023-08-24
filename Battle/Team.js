class Team {
  constructor(team, name) {
    this.team = team;
    this.name = name;
    this.combatants = [];
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("Team");
    this.element.setAttribute("data-team", this.team);
  }

  update() {}

  init(container) {}
}
