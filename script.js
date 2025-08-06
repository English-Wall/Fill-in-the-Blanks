const questions = [
    {
        sentence: "The _____ should travel from the open position at the Stop Tube to the fully closed position with gravity force alone.",
        correct: "flappers",
        options: ["levers", "flappers", "lock wire", "connector"]
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
                nextButton.disabled = false;
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
    // When "Next" is clicked, clear the container and show an image.
    const container = document.querySelector('.container');
    // Replace "path/to/your/image.png" with the correct path to your image file.
    container.innerHTML = '<img src="flappers.jpg" alt="Congratulations" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">';
};

loadQuestion();
