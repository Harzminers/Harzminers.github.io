`use strict`;

// const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];
// const temp2 = [3, 6, 2, -23, 27, `error`];

// function removeNaNValuesFromArray(array) {
//   array.forEach((element) => {
//     if (isNaN(element)) {
//       array.splice(array.indexOf(element), 1);
//     }
//   });

//   return array;
// }

// const extremeNumberInArray = (array, greaterThan) => {
//   //original array is not modified
//   const observedArray = [];
//   array.forEach((element) => {
//     observedArray.push(element);
//   });
//   removeNaNValuesFromArray(observedArray);
//   // return 0 if no elements
//   if (observedArray.length === 0) {
//     return 0;
//   }

//   // initial highest number is the first in the array
//   let highestNumber = array[0];
//   // update highest number if element is greater than the former highest number
//   observedArray.forEach((element) => {
//     if (greaterThan ? element > highestNumber : element < highestNumber) {
//       highestNumber = element;
//     }
//   });

//   return highestNumber;
// };

// const arrayAmplitude = (array) => {
//   return extremeNumberInArray(array, true) - extremeNumberInArray(array, false);
// };

// function calcTempAmplitude(tempArray) {
//   return arrayAmplitude(tempArray);
// }

// function joinArrays(arrays) {
//   // const joinedArray = [];
//   // arrays.forEach((a) => {
//   //   a.forEach((element) => {
//   //     joinedArray.push(element);
//   //   });
//   // });
//   // return joinedArray;
//   let joinedArray = [];

//   arrays.forEach((element) => {
//     joinedArray = joinedArray.concat(element);
//   });

//   return joinedArray;
// }

// console.log(calcTempAmplitude(temperatures));
// console.log(calcTempAmplitude(joinArrays([temperatures, temp2])));
//_______________________________________________________________________

// const temperatureForcast = [22, 15, 32.6, 17, 5, 0, 6.5];

// function printForecast(tempArray) {
//   let forecastString = ``;

//   for (let i = 0; i < tempArray.length; i++) {
//     forecastString +=
//       "In " +
//       (i + 1) +
//       " days, the temperature will be " +
//       temperatureForcast[i] +
//       " °C!\n";
//   }

//   console.log(forecastString);
// }

// printForecast(temperatureForcast);
//________________________________________________________________________
const mysteryNumberElement = document.querySelector(`.mysteryNumber`);
const numberInputField = document.querySelector(`.numberInput`);
const documentBody = document.querySelector(`body`);
const checkBtn = document.querySelector(`.checkBtn`);

const maxGuessingNumber = 100;
const minGuessingNumber = 0;

let gameHasEnded = false;

let currentScore = maxGuessingNumber;
let highScore = 0;

let mysteryNumber = 0;

const today = new Date();
mysteryNumber = SetNewMysteryNumber();
InitNewGame();

function AppendToLog(string) {
  // document.querySelector(`.guessing-log`).textContent +=
  //   "(" +
  //   today.getHours() +
  //   " : " +
  //   today.getMinutes() +
  //   " : " +
  //   today.getSeconds() +
  //   ")" +
  //   " : " +
  //   string +
  //   "\n";
}

function SetNewMysteryNumber() {
  mysteryNumber =
    Math.round(
      Math.random() * (maxGuessingNumber - minGuessingNumber) +
        minGuessingNumber
    ) + 1;
  return mysteryNumber;
}
function ChangeScore(value) {
  currentScore += value;
  document.querySelector(
    `.current-score`
  ).textContent = `Current Score: ${currentScore}`;
}
function SetScore(value) {
  currentScore = value;
  document.querySelector(
    `.current-score`
  ).textContent = `Current Score: ${currentScore}`;
}
function SetHighScore(score) {
  highScore = score;
  document.querySelector(`.high-score`).textContent = `Highscore: ${highScore}`;
}
function DisplayGuessResponse(message) {
  document.querySelector(`.numResponseUI`).textContent = message;
}
// set initial values
function InitNewGame() {
  gameHasEnded = false;
  AppendToLog(`A new round has been started!`);
  SetNewMysteryNumber();
  SetScore(maxGuessingNumber);
  SetHighScore(highScore);
  mysteryNumberElement.textContent = "?";
  document.querySelector(
    `.page-subtitle`
  ).textContent = `What number between ${minGuessingNumber} and ${maxGuessingNumber} am I thinking of?`;
  numberInputField.value = ``;
  DisplayGuessResponse("Start guessing...");
  documentBody.style.backgroundColor = `whiteSmoke`;
}

checkBtn.addEventListener(`click`, function () {
  guessValue = Number(numberInputField.value);

  if (gameHasEnded) return;
  if (currentScore <= 1) {
    DisplayGuessResponse(`You lost the Game.`);
    gameHasEnded = true;
    ChangeScore(-1);
    AppendToLog(`You have lost the Game!`);
    return;
  }
  if (
    (!guessValue && guessValue !== 0 && minGuessingNumber <= 0) ||
    typeof guessValue !== "number" ||
    guessValue > maxGuessingNumber ||
    guessValue < minGuessingNumber
  ) {
    DisplayGuessResponse("Invalid Input!");
    AppendToLog(`Entered an invalid Input (${guessValue})!`);
    return;
  }

  const responseMessage =
    guessValue > mysteryNumber
      ? "Too high!"
      : guessValue < mysteryNumber
      ? "Too low!"
      : "Correct Number!";

  DisplayGuessResponse(responseMessage);

  if (guessValue === mysteryNumber) {
    if (currentScore > highScore) {
      SetHighScore(currentScore);
    }
    mysteryNumberElement.textContent = mysteryNumber;
    documentBody.style.backgroundColor = `#60b347`;
    highScore = currentScore;
    gameHasEnded = true;
    AppendToLog(`Guessed ${guessValue}. This is the correct Number!`);
    AppendToLog(`Round has ended. Start a new round to play again.`);
  } else {
    ChangeScore(-1);
    AppendToLog(`Guessed ${guessValue}. This is ${responseMessage}.`);
  }
});

numberInputField.addEventListener(`change`, function () {
  value = Number(numberInputField.value);
  numberInputField.value =
    value > maxGuessingNumber
      ? maxGuessingNumber
      : value < minGuessingNumber
      ? minGuessingNumber
      : value;
});

document.querySelector(`.restart-btn`).addEventListener(`click`, function () {
  InitNewGame();
});
