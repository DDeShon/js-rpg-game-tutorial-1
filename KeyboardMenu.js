class KeyboardMenu {
  constructor() {
    this.options = []; // set by updater method
    this.up = null;
    this.down = null;
    this.prevFocus = null;
  }

  setOptions(options) {
    this.options = options;
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("KeyboardMenu");
  }

  init() {}
}
