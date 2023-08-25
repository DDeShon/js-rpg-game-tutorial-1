class PlayerState {
  constructor() {
    this.pizzas = {
      p1: {
        pizzaId: "s001",
        hp: 30,
        maxHP: 50,
        xp: 85,
        maxXp: 100,
        level: 1,
        status: null,
      },
      p2: {
        pizzaId: "v001",
        hp: 50,
        maxHP: 50,
        xp: 85,
        maxXp: 100,
        level: 1,
        status: null,
      },
    };
    this.lineup = ["p1", "p2"];
    this.items = [
      { actionId: "item_recoverStatus", instanceId: "item1" },
      { actionId: "item_recoverHp", instanceId: "item2" },
      { actionId: "item_recoverHp", instanceId: "item3" },
    ];
  }

  init() {}
}
window.playerState = new PlayerState();
