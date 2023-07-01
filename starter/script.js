'use strict';
// NOTE selecting the ids using dom elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const playertxt0 = document.querySelector('#name--0');
const playertxt1 = document.querySelector('#name--1');

// Starting Conditions
let score, currentScore, activePlayer, scores, playing;

// functions()
const initialCon = function () {
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  playertxt0.textContent = `Player 1`;
  playertxt1.textContent = `Player 2`;

  diceEl.classList.remove('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};
const currentscr = function () {
  currentScore += dice;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
};
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
initialCon();
// Dice Roll
btnRoll.addEventListener('click', function () {
  // Generating a Random Dice Roll;
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display the Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Add Dice to Current Score
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //currentscr();
    }
    // Switch player When dice is one
    else {
      switchPlayer();
    }
  }
});

//Hold Button Function
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add the Score the score to current Player
    scores[activePlayer] += currentScore;
    // score[player0]=scoore[player0]+1;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2.Check the SCORE>=100
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
      document.querySelector(
        `#name--${activePlayer}`
      ).textContent = `GAME WON✨`;

      //3. If Yes Finish The Game
    } else {
      switchPlayer();
    }
  }
});

//Resetting The Game Button Event
btnNew.addEventListener(
  'click',
  initialCon
  //Set playing = true
  // 1. Set currentscore=0, hold Score=0,display it .
  //active player =0,remove the winner class,remove the dice hidden class

  // playing = true;
  // currentScore = 0;
  // activePlayer = 0;
  // scores = [0, 0];
  // current0El.textContent = 0;
  // current1El.textContent = 0;
  // score0El.textContent = 0;
  // score1El.textContent = 0;
  // diceEl.classList.remove('hidden');
  // player0El.classList.add('player--active');
  // player1El.classList.remove('player--active');
  // player0El.classList.remove('player--winner');
  // player1El.classList.remove('player--winner');
);
//-----------Switch----------------
// const age = Number(prompt('Enter Your Age'));
// const Elage = 18;
// switch (true) {
//   case age >= Elage:
//     console.log('Pass');
//     break;
//   case age > 0 && age < 18:
//     console.log('Fail');
//     break;
// }
