class GuessingGame {
  constructor() {
    this.num;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.num = Math.round((this.min + this.max) / 2);
    console.log(this.num);
    return this.num;
  }

  lower() {
    this.max = this.num;
  }

  greater() {
    this.min = this.num;
  }
}

module.exports = GuessingGame;
