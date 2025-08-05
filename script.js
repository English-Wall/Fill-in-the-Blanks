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

function disableOptions() {
    const options = document.querySelectorAll('.option-btn');
    options.forEach(btn => {
        btn.disabled = true;
    });
}

function loadQuestion() {
    const q = questions[current];
    document.getElementById("feedback").textContent = "";
    document.getElementById("question").innerHTML = q.sentence.replace("____", "_____");
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option-btn");
        btn.classList.add("option-btn-" + (index + 1));
        btn.onclick = () => {
            if (option === q.correct) {
                btn.classList.add("correct");
                document.getElementById("feedback").textContent = "✅ Correct!";
                disableOptions();
            } else {
                btn.classList.add("incorrect");
                document.getElementById("feedback").textContent = "❌ Wrong. Try again.";
                btn.disabled = true; // Disable only the wrong option
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
