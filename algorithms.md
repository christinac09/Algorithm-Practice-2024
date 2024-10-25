# Algorithms

### 1. Not an Algorithm
This function accepts input and chooses rock, paper, or scissors as the user's choice. To make it an algorithm, add a for or while loop
```javascript
function returnInput(input) {
  let output;

  if (input == 0) {                /* selection - if statement, but no iteration */
    output = "rock";
  } else if (input == 1) {
    output = "paper";
  } else {
    output = "scissors";
  }

  return output;
}
```

### 2. Is an Algorithm

This function chooses a random opponent choice, then takes that and the user's choice to determine who won. 
It has a for loop (iteration) that iterates over a random range of numbers, while i is less than the random integer, to randomly choose the opponent's choice. The if statement (selection) that runs after it assigns an outcome by seeing comparing the user's and opponent's choice. This was done in a series of steps (sequencing), therefore it is an algorithm.

```javascript
function rockPaperScissors(input) {
  const random = Math.floor(Math.random() * 100); /* sequencing - throughout the function */
  let opponentChoice;
  let outcome;

  for (let i = 0; i <= random; i++) {           /* iteration - for loop */
    if (i % 3 == 0) {                           /* selection - if statement */
      opponentChoice = "rock";
    } else if (i % 2 == 0) {
      opponentChoice = "paper";
    } else {
      opponentChoice = "scissors";
    }
  }

  if (opponentChoice == "rock") {               /* selection - if statement */
    if (input == 1) {
      outcome = "win";
    } else if (input == 2) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else if (opponentChoice == "paper") {
    if (input == 2) {
      outcome = "win";
    } else if (input == 0) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else {
    if (input == 0) {
      outcome = "win";
    } else if (input == 1) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  }
  history.push(outcome);

  DOMSelectors.history.innerHTML = "";
  DOMSelectors.content.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" id="${outcome}">
    <p>Your choice: ${returnInput(input).toUpperCase()}</p>
    <p>Opponent choice: ${opponentChoice.toUpperCase()}</p>
    <h4>${outcome.toUpperCase()}</h4>
    </div>
    `
  );
}
```

### 3. Is an Algorithm
This function keeps track of and displays how many times the user wins, loses, or draws.
```javascript
function getHistory() {
  DOMSelectors.content.innerHTML = "";
  DOMSelectors.history.innerHTML = "";
  let win = 0;
  let lose = 0;
  let draw = 0;

  for (let i = 0; i < history.length; i++) {      /* iteration - for loop */
    if (history[i] == "win") {                    /* selection - if statement */
      win++;                                      /* sequencing - steps throughout the function */
    } else if (history[i] == "lose") {
      lose++;
    } else {
      draw++;
    }

    DOMSelectors.history.insertAdjacentHTML(
      "afterbegin",
      `<div class="historyCard" id="${history[i]}">
        <h4>Game ${i + 1}: ${history[i].toUpperCase()}</h4>
        </div>`
    );
  }

  DOMSelectors.history.insertAdjacentHTML(
    "afterbegin",
    `<h2>Win Rate: ${((win / (win + lose + draw)) * 100)
      .toString()
      .substring(0, 5)}%</h2>
        <h3>Wins: ${win} | Losses: ${lose} | Draws: ${draw}</h3>`
  );
}

```