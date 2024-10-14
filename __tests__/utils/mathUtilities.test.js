const { isCorrectAnswer, getQuestion } = require("../../utils/mathUtilities");

describe("Tests for getQuestion", () => {});

describe("Tests for isCorrectAnswer", () => {
  it("should return true for a correct answer", () => {
    const question = { first: 2, second: 3, operand: "+" };
    const result = isCorrectAnswer(question, 5);
    expect(result).toBe(true);
  });
});
