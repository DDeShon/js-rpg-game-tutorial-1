class Battle {
  constructor({ enemy, onComplete }) {
    this.enemy = enemy;
    this.onComplete = onComplete;

    this.combatants = {
      //   player1: new Combatant(
      //     {
      //       ...Pizzas.s001,
      //       team: "player",
      //       hp: 50,
      //       maxHP: 50,
      //       xp: 85,
      //       maxXp: 100,
      //       level: 1,
      //       status: null,
      //       isPlayerControlled: true,
      //     },
      //     this
      //   ),
      //   player2: new Combatant(
      //     {
      //       ...Pizzas.s002,
      //       team: "player",
      //       hp: 100,
      //       maxHP: 100,
      //       xp: 75,
      //       maxXp: 100,
      //       level: 1,
      //       status: null,
      //       isPlayerControlled: true,
      //     },
      //     this
      //   ),
      //   enemy1: new Combatant(
      //     {
      //       ...Pizzas.v001,
      //       team: "enemy",
      //       hp: 1,
      //       maxHP: 50,
      //       xp: 20,
      //       maxXp: 100,
      //       level: 1,
      //       status: null,
      //     },
      //     this
      //   ),
      //   enemy2: new Combatant(
      //     {
      //       ...Pizzas.f001,
      //       team: "enemy",
      //       hp: 20,
      //       maxHP: 50,
      //       xp: 30,
      //       maxXp: 100,
      //       level: 1,
      //       status: null,
      //     },
      //     this
      //   ),
    };

    this.activeCombatants = {
      player: null, //"player1",
      enemy: null, //"enemy1",
    };

    // Dynamically add player team
    window.playerState.lineup.forEach((id) => {
      this.addCombatant(id, "player", window.playerState.pizzas[id]);
    });

    // Dynamically add enemy team
    Object.keys(this.enemy.pizzas).forEach((key) => {
      this.addCombatant("e_" + key, "enemy", this.enemy.pizzas[key]);
    });

    this.items = [
      // { actionId: "item_recoverStatus", instanceId: "p1", team: "player" },
      // { actionId: "item_recoverStatus", instanceId: "p2", team: "player" },
      // { actionId: "item_recoverStatus", instanceId: "p3", team: "enemy" },
      // { actionId: "item_recoverHp", instanceId: "p4", team: "player" },
    ];
  }

  addCombatant(id, team, config) {
    this.combatants[id] = new Combatant(
      {
        ...Pizzas[config.pizzaId],
        ...config,
        team,
        isPlayerControlled: team === "player",
      },
      this
    );

    // Populate first active pizza
    this.activeCombatants[team] = this.activeCombatants[team] || id;
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("Battle");
    this.element.innerHTML = `
            <div class="Battle_hero">
                <img src="${"/images/characters/people/hero.png"}" alt="Hero" />
            </div>
            <div class="Battle_enemy">
                <img src=${this.enemy.src} alt=${this.enemy.name} />
            </div>
        `;
  }

  init(container) {
    this.createElement();
    container.appendChild(this.element);

    this.playerTeam = new Team("player", "Hero");
    this.enemyTeam = new Team("enemy", "Bully");

    Object.keys(this.combatants).forEach((key) => {
      let combatant = this.combatants[key];
      combatant.id = key;
      combatant.init(this.element);

      // Add to correct team
      if (combatant.team === "player") {
        this.playerTeam.combatants.push(combatant);
      } else if (combatant.team === "enemy") {
        this.enemyTeam.combatants.push(combatant);
      }
    });

    this.playerTeam.init(this.element);
    this.enemyTeam.init(this.element);

    this.turnCycle = new TurnCycle({
      battle: this,
      onNewEvent: (event) => {
        return new Promise((resolve) => {
          const battleEvent = new BattleEvent(event, this);
          battleEvent.init(resolve);
        });
      },
    });

    this.turnCycle.init();
  }
}
