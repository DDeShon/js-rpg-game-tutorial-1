class SceneTransition {
  constructor() {
    this.element = null;
  }
  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("SceneTransition");
  }

  init(container) {
    this.createElement();
    container.appendChild(this.element);
  }
}
