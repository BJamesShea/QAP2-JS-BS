const { isCorrectAnswer, getQuestion } = require("../../utils/mathUtilities");

describe("Tests for getQuestion", () => {
  it("Should return an object with first, second and operand", () => {
    const result = getQuestion();

    expect(typeof result).toBe("object");

    expect(typeof result.first).toBe("number");
    expect(typeof result.second).toBe("number");
    expect(["+", "-", "*", "/"]).toContain(result.operand);
  });
});

describe("Tests for isCorrectAnswer", () => {
  it("should return true for a correct answer", () => {
    const question = { first: 2, second: 3, operand: "+" };
    const result = isCorrectAnswer(question, 5);
    expect(result).toBe(true);
  });

  it("should return false for an incorrect answer", () => {
    const question = { first: 4, second: 1, operand: "-" };
    const result = isCorrectAnswer(question, 10);
    expect(result).toBe(false);
  });
});
