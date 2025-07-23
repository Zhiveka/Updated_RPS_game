let wins = 0;
let losses = 0;
let draws = 0;

function getComputerChoice() {
  const choices = ['Rock', 'Scissors', 'Paper'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(user, computer) {
  if (user === computer) return 'draw';
  if (
    (user === 'Rock' && computer === 'Scissors') ||
    (user === 'Scissors' && computer === 'Paper') ||
    (user === 'Paper' && computer === 'Rock')
  ) return 'win';
  return 'lose';
}

function play(userChoice) {
  const computerChoice = getComputerChoice();
  const outcome = determineWinner(userChoice, computerChoice);

  // Play sound
  if (outcome === 'win') document.getElementById('win-sound').play();
  else if (outcome === 'lose') document.getElementById('lose-sound').play();
  else document.getElementById('draw-sound').play();

  // Flash animation
  const resultEl = document.getElementById('result');
  resultEl.classList.remove('choice-flash'); // optional for reset
  void resultEl.offsetWidth;
  resultEl.classList.add('choice-flash');

  // Update result message
  let message = `You chose <b>${userChoice}</b>, computer chose <b>${computerChoice}</b>.` ;

  if (outcome === 'win') {
    wins++;
    message += "You <span style='color: green;'>win</span>!";
  } else if (outcome === 'lose') {
    losses++;
    message += "You <span style='color: red;'>lose</span>!";
  } else {
    draws++;
    message += "It's a <span style='color: gray;'>draw</span>.";
  }

  resultEl.innerHTML = message;
  document.getElementById('stats').innerText = `Wins: ${wins} | Losses: ${losses} | Draws: ${draws}`;
}

function restart() {
  console.log("Restart button clicked");

  const resultEl = document.getElementById('result');
  const statsEl = document.getElementById('stats');

  console.log("resultEl:", resultEl);
  console.log("statsEl:", statsEl);

  wins = 0;
  losses = 0;
  draws = 0;

  resultEl.innerText = '';
  statsEl.innerText = 'Wins: 0 | Losses: 0 | Draws: 0';
}
