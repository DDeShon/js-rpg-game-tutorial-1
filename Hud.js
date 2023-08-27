class Hud {
  constructor() {
    this.scoreboards = [];
  }

  update() {}

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("Hud");

    const { playerState } = window;
    playerState.lineup.forEach((key) => {
      const pizza = playerState.pizzas[key];
      const scoreboard = new Combatant(
        {
          id: key,
          ...Pizzas[pizza.pizzaId],
          ...pizza,
        },
        null
      );
      scoreboard.createElement();
    });
  }

  init(container) {
    this.createElement();
    container.appendChild(container);
  }
}
