const btn = document.querySelector("#submitBtn"),
  inputNum = document.querySelector("#guessInput"),
  feedback = document.querySelector(".feedback"),
  restart = document.querySelector("#restartBtn"),
  attempts = document.querySelector("#attempts");

let res = getRandomInt(1, 100),
  attempt = 0;

btn.addEventListener("click", () => {
  let userInput = Number(inputNum.value);

  attempt++;
  console.log(attempt);

  if (!isNaN(userInput)) {
    if (res === userInput && attempt === 1) {
      attempts.textContent = `Attemps :${attempt}`;

      feedback.textContent = "You nailed it!";
      feedback.classList.add("congratsText");

      for (let i = 0; i < 30; i++) {
        createEmoji();
      }
      return;
    }
    if (res === userInput) {
      feedback.textContent = "Right !! <333";
      attempts.textContent = `Attemps :${attempt}`;

      return;
    } else if (res < userInput) {
      feedback.textContent = "Too much ";
      attempts.textContent = `Attemps :${attempt}`;
    } else if (res > userInput) {
      feedback.textContent = "Not enough";
      attempts.textContent = `Attemps :${attempt}`;
    }
  } else {
    feedback.textContent = "Something went wrong...";
    attempts.textContent = `Attemps :${attempt}`;
  }
});

restart.addEventListener("click", () => {
  const emojis = document.querySelectorAll(".emoji");
  emojis.forEach((emoji) => emoji.remove());

  res = getRandomInt(1, 100);
  feedback.textContent = "Let's go :) !";

  attempt = 0;
  attempts.textContent = `Attemps :${attempt}`;
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.textContent = "🎉";
  emoji.classList.add("emoji");

  emoji.style.left = `${Math.random() * 100}vw`;
  emoji.style.top = `${Math.random() * 100}vh`;
  emoji.style.setProperty("--x", `${(Math.random() - 0.5) * 50}vw`);
  emoji.style.setProperty("--y", `${(Math.random() - 0.5) * 50}vh`);

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 5000);

  setTimeout(() => {
    feedback.classList.remove("congratsText");
  }, 5000);
}
