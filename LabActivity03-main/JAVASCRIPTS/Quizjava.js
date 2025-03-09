function nextQuestion(current) {
    let selected = document.querySelector(`input[name="q${current}"]:checked`);
    if (!selected) {
        alert("Please select an answer before proceeding.");
        return;
    }

    document.getElementById(`q${current}`).classList.remove("active");
    let next = document.getElementById(`q${current + 1}`);
    if (next) {
        next.classList.add("active");
    }
}

function checkAnswers() {
    const answers = {
        q1: "b",
        q2: "b",
        q3: "b",
        q4: "a",
        q5: "c",
        q6: "b",
        q7: "d",
        q8: "c",
        q9: "d",
        q10: "c"
    };

    let score = 0;
    const totalQuestions = Object.keys(answers).length;

    for (let question in answers) {
        let selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    document.getElementById("result").innerText = `You scored ${score} out of ${totalQuestions}!`;
}
