export default class Calculator {
  constructor() {
    this.value = 0;
  }

  getValue() {
    return this.value;
  }

  add(amount) {
    this.value = this.value + amount;
  }
}
