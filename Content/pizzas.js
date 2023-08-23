window.PizzaTypes = {
  normal: "normal",
  spicy: "spicy",
  veggie: "veggie",
  fungi: "fungi",
  chill: "chill",
};

window.Pizzas = {
  s001: {
    name: "Slice Samurai",
    description: "Pizza description here",
    type: PizzaTypes.spicy,
    src: "/images/characters/pizzas/s001.png",
    icon: "/images/icons/spicy.png",
    actions: ["damage1", "saucyStatus", "clumsyStatus"],
  },
  s002: {
    name: "Bacon Brigade",
    description: "A salty warrior with no fear",
    type: PizzaTypes.spicy,
    src: "/images/characters/pizzas/s002.png",
    icon: "/images/icons/spicy.png",
    actions: ["damage1", "saucyStatus", "clumsyStatus"],
  },
  v001: {
    name: "Call Me Kale",
    description: "Pizza description here",
    type: PizzaTypes.veggie,
    src: "/images/characters/pizzas/v001.png",
    icon: "/images/icons/veggie.png",
    actions: ["damage1"],
  },
  f001: {
    name: "Portobello Express",
    description: "Pizza description here",
    type: PizzaTypes.fungi,
    src: "/images/characters/pizzas/f001.png",
    icon: "/images/icons/fungi.png",
    actions: ["damage1"],
  },
};
