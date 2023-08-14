window.BattleAnimations = {
  async spin(event, onComplete) {
    const element = event.caster.pizzaElement;
    const animationClassName =
      event.caster.team === "player" ? "battle-spin-right" : "battle-spin-left";
    element.classList.add(animationClassName);

    // Remove class when animation is complete
    element.addEventListener(
      "animationene",
      () => {
        element.classList.remove(animationClassName);
      },
      { once: true }
    );

    // Continue the battle around the time the pizzas collide
    await utils.wait(100);
    onComplete();
  },
};
