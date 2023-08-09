class RevealingText {
  constructor(config) {
    this.element = config.element;
    this.text = config.text;
    this.speed = config.element || 70;

    this.timeout = null;
    this.isDone = false;
  }

  init() {
    let characters = [];
    this.text.split("").forEach((character) => {
      // Create each span, add to element in DOM
      let span = document.createElement("span");
      span.textContent = character;
      this.element.appendChild(span);

      // Add this span to internal state Array
      characters.push({
        span,
        delayAfter: character === " " ? 0 : this.speed,
      });
    });
  }
}
