const { isCorrectAnswer, getQuestion } = require("../../utils/mathUtilities");

describe("Tests for getQuestion", () => {});

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
