window.Actions = {
  damage1: {
    name: "Whomp!",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!" },
      //   { type: "animation", animation: "Something happened!" },
      { type: "stateChange", damage: 10 },
    ],
  },
};
