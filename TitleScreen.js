class TitleScreen {
  constructor() {}

  getOptions() {
    return [];
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("TitleScreen");
  }

  close() {
    this.keyboardMenu.end();
    this.element.remove();
  }

  init(container) {}
}
