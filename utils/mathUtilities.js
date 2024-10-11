/**
 * Gets a random multiplication, division, subtraction or addition question
 *
 * @returns {} The randomly generated math question
 */
function getQuestion() {
  // Generating random numbers
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

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
  const firstNumber = question.first;
  const secondNumber = question.second;
  const operator = question.operand;

  if (operator == "+") {
    const plusQ = firstNumber + secondNumber;
    if (plusQ == answer) return true;
  }
  if (operator == "-") {
    const subQ = firstNumber - secondNumber;
    if (subQ == answer) return true;
  }
  if (operator == "*") {
    const multiQ = firstNumber * secondNumber;
    if (multiQ == answer) return true;
  }
  if (operator == "/") {
    const divQ = firstNumber / secondNumber; // DON'T FORGET TO HANDLE WEIRD EDGE CASES WITH DIVISION (I'M PROBABLY GOING TO FORGET)
    if (divQ == answer) return true;
  }

  return false;
}

module.exports = {
  getQuestion,
  isCorrectAnswer,
};
