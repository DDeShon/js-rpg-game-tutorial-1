class BattleEvent {
  constructor(event, battle) {
    this.event = event;
    this.battle = battle;
  }

  textMessage(resolve) {
    const text = this.event.text
      .replace("{CASTER}", this.event.caster?.name)
      .replace("{TARGET}", this.event.target?.name)
      .replace("{ACTION}", this.event.action?.name);

    const message = new TextMessage({
      text,
      onComplete: () => {
        resolve();
      },
    });
    message.init(this.battle.element);
  }

  async stateChange(resolve) {
    const { caster, target, damage, recover, status, action } = this.event;
    let who = this.event.onCaster ? caster : target;

    if (damage) {
      // Modify the target HP
      target.update({
        hp: target.hp - damage,
      });

      // Start blinking
      target.pizzaElement.classList.add("battle-damage-blink");
    }

    // Handle recovery state
    if (recover) {
      let newHP = who.hp + recover;
      if (newHP > who.maxHP) {
        newHP = who.maxHP;
      }
      who.update({
        hp: newHP,
      });
    }

    // Status state change
    if (status) {
      who.update({
        status: { ...status },
      });
    }
    if (status === null) {
      who.update({
        status: null,
      });
    }

    // Wait
    await utils.wait(600);

    // Stop blinking
    target.pizzaElement.classList.remove("battle-damage-blink");

    resolve();
  }

  submissionMenu(resolve) {
    const menu = new SubmissionMenu({
      caster: this.event.caster,
      enemy: this.event.enemy,
      items: this.battle.items,
      onComplete: (submission) => {
        // submission ( what move to use and who to use it on )
        resolve(submission);
      },
    });
    menu.init(this.battle.element);
  }

  animation(resolve) {
    const fn = BattleAnimations[this.event.animation];
    fn(this.event, resolve);
  }

  init(resolve) {
    this[this.event.type](resolve);
  }
}
