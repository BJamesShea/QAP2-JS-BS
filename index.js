let streak = 0; // STREAK

const express = require("express");
const { getQuestion, isCorrectAnswer } = require("./utils/mathUtilities");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/quiz", (req, res) => {
  const question = getQuestion();
  res.render("quiz", { question, streak });
});

app.get("/completion", (req, res) => {
  res.render("completion");
});

app.get("/leaderboard", (req, res) => {
  res.render("leaderboard");
});

app.post("/quiz", (req, res) => {
  const { first, second, operand, answer } = req.body;

  const question = {
    first: Number(first),
    second: Number(second),
    operand,
  };

  const isCorrect = isCorrectAnswer(question, Number(answer));
  console.log(`User Answer: ${answer}, Correct: ${isCorrect}`);

  if (isCorrect) {
    streak++; // Increment streak on correct answer
    res.redirect("/quiz"); // Reload quiz with updated streak
  } else {
    streak = 0; // Reset streak on wrong answer
    res.redirect("/completion"); // Redirect to completion page
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
