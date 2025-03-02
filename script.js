const randomNumber = Math.floor(Math.random() * 100) + 1;
const inputElement = document.getElementById("guess");
const feedbackElement = document.getElementById("feedback");

let attempts = 10;

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const guess = parseInt(inputElement.value, 10);
  attempts--;

  const feedbackMessages = {
    correct: { message: "Parabéns!", color: "green" },
    low: { message: `Muito baixo! Tente novamente. Ainda resta(m) ${attempts} tentativa(s).`, color: "red" },
    high: { message: `Muito alto! Tente novamente. Ainda resta(m) ${attempts} tentativa(s).`, color: "red" },
    gameOver: { message: `Fim de jogo! O número correto era ${randomNumber}`, color: "red" },
  };

  const getFeedback = () => {
    if (guess === randomNumber) return "correct";
    if (attempts === 0) return "gameOver";
    return guess < randomNumber ? "low" : "high";
  };

  const feedbackKey = getFeedback();
  const { message, color } = feedbackMessages[feedbackKey];

  feedbackElement.innerText = message;
  feedbackElement.style.color = color;

  if (feedbackKey === "correct" || feedbackKey === "gameOver") {
    inputElement.disabled = true; // Desativa o campo de entrada
  }
});