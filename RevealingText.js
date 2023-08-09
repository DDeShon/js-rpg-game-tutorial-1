class RevealingText {
  constructor(config) {
    this.element = config.element;
    this.text = config.text;
    this.speed = config.element || 70;

    this.timeout = null;
  }
}
