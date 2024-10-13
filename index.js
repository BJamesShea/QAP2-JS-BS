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
  res.render("quiz", { question });
});

app.get("/completion", (req, res) => {
  res.render("completion");
});

app.get("/leaderboard", (req, res) => {
  res.render("leaderboard");
});

app.post("/quiz", (req, res) => {
  const { first, second, operand, answer } = req.body;

  console.log(
    `Received: first=${first}, second=${second}, operand=${operand}, answer=${answer}`
  );

  const question = {
    first: Number(first),
    second: Number(second),
    operand,
  };

  const isCorrect = isCorrectAnswer(question, Number(answer));
  console.log(`Question: ${JSON.stringify(question)}`);
  console.log(`User Answer: ${answer}, Correct: ${isCorrect}`);

  if (isCorrect) {
    res.redirect("/quiz");
  } else {
    res.redirect("/completion");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
