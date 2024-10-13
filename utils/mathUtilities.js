/**
 * Gets a random multiplication, division, subtraction or addition question
 *
 * @returns {} The randomly generated math question
 */
function getQuestion() {
  // Generating random numbers
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);

  // Generate a random operatorrrrrrrr
  const operators = ["+", "-", "*", "/"];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  // randomQuestion obj
  const randQuestion = { first: num1, second: num2, operand: operator };
  return randQuestion;
}

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 *
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */
function isCorrectAnswer(question, answer) {
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
