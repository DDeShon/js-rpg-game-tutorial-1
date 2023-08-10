class SceneTransition {
  constructor() {
    this.element = null;
  }
  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("SceneTransition");
  }

  fadeOut() {
    this.element.classList("fade-out");
    this.element.addEventListener(
      "onanimationend",
      () => {
        this.element.remove();
      },
      { once: true }
    );
  }

  init(container, callback) {
    this.createElement();
    container.appendChild(this.element);

    this.element.addEventListener(
      "onanimationend",
      () => {
        callback();
      },
      { once: true }
    );
  }
}
