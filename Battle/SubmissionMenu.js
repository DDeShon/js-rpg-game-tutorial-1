class SubmissionMenu {
  constructor({ caster, enemy, onComplete }) {
    this.caster = caster;
    this.enemy = enemy;
    this.onComplete = onComplete;
  }

  getPages() {
    const backOption = {
      label: "Go Back",
      description: "Return to previous page",
      handler: () => {
        this.keyboardMenu.setOptions(this.getPages().root);
      },
    };
    return {
      root: [
        {
          label: "Attack",
          description: "Choose an attack",
          handler: () => {
            // Do something when chosen
            this.keyboardMenu.setOptions(this.getPages().attacks);
          },
        },
        {
          label: "Items",
          description: "Choose an item",
          handler: () => {
            // Go to items page
            this.keyboardMenu.setOptions(this.getPages().items);
          },
        },
        {
          label: "Swap",
          description: "Change to another pizza",
          handler: () => {
            // See pizza options
          },
        },
      ],
      attacks: [
        {
          label: "My first attack",
          description: "Does this..",
          handler: () => {
            // Submit this attack
          },
        },
        backOption,
      ],
      items: [
        // Items will go here
        backOption,
      ],
    };
  }

  decide() {
    this.onComplete({
      action: Actions[this.caster.actions[0]],
      target: this.enemy,
    });
  }

  showMenu(container) {
    this.keyboardMenu = new KeyboardMenu();
    this.keyboardMenu.init(container);
    this.keyboardMenu.setOptions(this.getPages().root);
  }

  init(container) {
    if (this.caster.isPlayerControlled) {
      // Show UI
      this.showMenu(container);
    } else {
      this.decide();
    }
  }
}
