window.BattleAnimations = {
  async spin(event, onComplete) {
    const element = event.caster.pizzaElement;
    const animationClassName =
      event.caster.team === "player" ? "battle-spin-right" : "battle-spin-left";
    element.classList.add(animationClassName);

    //Remove class when animation is fully complete
    element.addEventListener(
      "animationend",
      () => {
        element.classList.remove(animationClassName);
      },
      { once: true }
    );

    //Continue battle cycle right around when the pizzas collide
    await utils.wait(100);
    onComplete();
  },

  async glob(event, onComplete) {
    const { caster } = event;
    let div = document.createElement("div");
    div.classList.add("glob-orb");
    div.classList.add(
      caster.team === "player" ? "battle-glob-right" : "battle-glob-left"
    );
  },
};
