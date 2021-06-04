import Calculator from "./Calculator";

describe("the calculator", () => {
  test("does nothing", () => {
    const calculator = new Calculator();

    expect(calculator.getValue()).toBe(0);
  });

  test("adds", () => {
    const calculator = new Calculator();
    calculator.add(1);
    expect(calculator.getValue()).toBe(1);
  });
});
