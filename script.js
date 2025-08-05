const questions = [
  {
    sentence: "The sky is ____ during the day.",
    correct: "blue",
    options: ["green", "blue", "black", "red"]
  },
  {
    sentence: "Birds can ____ in the sky.",
    correct: "fly",
    options: ["walk", "run", "fly", "jump"]
  }
];

let current = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("feedback").textContent = "";
  document.getElementById("question").innerHTML = q.sentence.replace("____", "_____");
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      if (option === q.correct) {
        document.getElementById("feedback").textContent = "✅ Correct!";
      } else {
        document.getElementById("feedback").textContent = "❌ Wrong. Try again.";
      }
    };
    optionsDiv.appendChild(btn);
  });
}

document.getElementById("next").onclick = () => {
  current = (current + 1) % questions.length;
  loadQuestion();
};

loadQuestion();
