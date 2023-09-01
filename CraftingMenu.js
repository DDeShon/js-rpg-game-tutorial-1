class CraftingMenu {
  constructor({ pizzas, onComplete }) {
    this.pizzas = pizzas;
    this.onComplete = onComplete;
  }

  getOptions() {}

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("CraftingMenu");
    this.element.innerHTML = `
        <h2>Create a Pizza</h2>
    `;
  }

  close() {}

  init(container) {
    this.createElement();
    this.keyboardMenu = new KeyboardMenu({
      descriptionContainer: container,
    });
    this.keyboardMenu.init(this.element);
    this.keyboardMenu.setOptions(this.getOptions());
  }
}
