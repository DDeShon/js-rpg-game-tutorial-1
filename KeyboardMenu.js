class KeyboardMenu {
  constructor() {
    this.options = []; // set by updater method
    this.up = null;
    this.down = null;
    this.prevFocus = null;
  }

  setOptions(options) {
    this.options = options;
    this.element.innerHTML = this.options
      .map((option, index) => {
        return `
            <div class="option">
                <buttton data-button="${index}" data-description="${
          option.description
        }">
                    ${option.label}
                </button>
                <span class="right">${o.right ? o.right() : ""}</span>
            </div>
        `;
      })
      .join("");
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("KeyboardMenu");
  }

  init(container) {
    this.createElement();
  }
}
