const questions = [
    {
        sentence: "The sky is ____ during the day.",
        correct: "blue",
        options: ["green", "blue", "black", "red"]
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
    const nextButton = document.getElementById("next");
    
    // Disable the next button until the correct answer is chosen
    nextButton.disabled = true;

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
                nextButton.disabled = false; // Enable the next button
            } else {
                btn.classList.add("incorrect");
                document.getElementById("feedback").textContent = "❌ Wrong. Try again.";
                btn.disabled = true;
            }
        };
        optionsDiv.appendChild(btn);
    });
}

document.getElementById("next").onclick = () => {
    // When "Next" is clicked, clear the page and show a congrats message
    const container = document.querySelector('.container');
    container.innerHTML = '<h1>Congrats🎉</h1>';
};

loadQuestion();
