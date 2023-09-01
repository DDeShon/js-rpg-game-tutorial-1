class CraftingMenu {
  constructor({ pizzas, onComplete }) {
    this.pizzas = pizzas;
    this.onComplete = onComplete;
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("CraftingMenu");
    this.element.innerHTML = `
        <h2>Create a Pizza</h2
    `;
  }

  close() {}

  init(container) {}
}
