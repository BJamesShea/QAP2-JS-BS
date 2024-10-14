/**
 * Gets a random multiplication, division, subtraction or addition question
 *
 * @returns {} The randomly generated math question
 */
function getQuestion() {
  const operators = ["+", "-", "*", "/"];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let first, second;

  if (operator === "/") {
    second = Math.floor(Math.random() * 9) + 1;
    const multiplier = Math.floor(Math.random() * 10) + 1;
    first = second * multiplier;
  } else {
    first = Math.floor(Math.random() * 10);
    second = Math.floor(Math.random() * 10);
  }
  return { first, second, operand: operator };
}
/**
 * Parses the provided question and gets whether or not the provided answer is correct
 *
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */
function isCorrectAnswer(question, answer) {
  // Refactoring with VSC turned this function from an if statement to a switch. Why? Are switches better optimized?
  const { first, second, operand } = question;
  let correctAnswer;

  switch (operand) {
    case "+":
      correctAnswer = first + second;
      break;
    case "-":
      correctAnswer = first - second;
      break;
    case "*":
      correctAnswer = first * second;
      break;
    case "/": // note oct 13: division sucks. Logic to make divison easy? i.e make sure answer is always an integer?
      correctAnswer = Math.round((first / second) * 100) / 100; // Rounds to 2 decimals (fixing issue with division being weird)
      break;
    default:
      return false;
  }

  console.log(`Expected: ${correctAnswer}, User Answer: ${answer}`);
  return correctAnswer === answer;
}

module.exports = {
  getQuestion,
  isCorrectAnswer,
};
