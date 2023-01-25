const Calculator = require('./task3')

describe("add()", () => {
  const calculator = new Calculator();
  test("adds 1 + 2 to equal 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("adds -1 + 2 to equal 1", () => {
    expect(calculator.add(-1, 2)).toBe(1);
  });

  test("adds -1 + -2 to equal -3", () => {
    expect(calculator.add(-1, -2)).toBe(-3);
  });
});

describe("subtract()", () => {
  const calculator = new Calculator();
  test("subtracts 2 - 1 to equal 1", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });

  test("subtracts 2 - -1 to equal 3", () => {
    expect(calculator.subtract(2, -1)).toBe(3);
  });

  test("subtracts -2 - -1 to equal -1", () => {
    expect(calculator.subtract(-2, -1)).toBe(-1);
  });
});

describe("divide()", () => {
  const calculator = new Calculator();
  test("divides 6 / 2 to equal 3", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test("divides 6 / -2 to equal -3", () => {
    expect(calculator.divide(6, -2)).toBe(-3);
  });

  test("divides -6 / -2 to equal 3", () => {
    expect(calculator.divide(-6, -2)).toBe(3);
  });
});

describe("multiply()", () => {
  const calculator = new Calculator();
  test("multiply 2 * 2 to equal 4", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });

  test("multiply 2 * -2 to equal -4", () => {
    expect(calculator.multiply(2, -2)).toBe(-4);
  });

  test("multiply -2 * -2 to equal 4", () => {
    expect(calculator.multiply(-2, -2)).toBe(4);
  });
});