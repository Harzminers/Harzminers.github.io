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
// set initial values
function InitNewGame() {
  AppendToLog(`A new round has been started!`);
  gameHasEnded = false;
  SetNewMysteryNumber();
  currentScore = maxGuessingNumber;
  document.querySelector(`.mysteryNumber`).textContent = "?";
  document.querySelector(
    `.current-score`
  ).textContent = `Current Score: ${maxGuessingNumber}`;
  document.querySelector(`.high-score`).textContent = `Highscore: ${highScore}`;
  document.querySelector(
    `.page-subtitle`
  ).textContent = `What number between ${minGuessingNumber} and ${maxGuessingNumber} am I thinking of?`;
  document.querySelector(`.numberInput`).value = ``;
  document.querySelector(`.numResponseUI`).textContent = "Start guessing...";
  document.querySelector(`body`).style.backgroundColor = `whiteSmoke`;
}

document.querySelector(`.checkBtn`).addEventListener(`click`, function () {
  console.log(document.querySelector(`.numberInput`).value);
  guessValue = Number(document.querySelector(`.numberInput`).value);

  if (gameHasEnded) return;
  if (currentScore <= 1) {
    document.querySelector(`.numResponseUI`).textContent = `You lost the Game.`;
    gameHasEnded = true;
    currentScore--;
    document.querySelector(
      `.current-score`
    ).textContent = `Current Score: ${currentScore}`;
    AppendToLog(`You have lost the Game!`);
    return;
  }
  if (
    (!guessValue && guessValue !== 0) ||
    typeof guessValue !== "number" ||
    guessValue > maxGuessingNumber ||
    guessValue < minGuessingNumber
  ) {
    document.querySelector(`.numResponseUI`).textContent = "Invalid Input!";
    AppendToLog(`Entered an invalid Input (${guessValue})!`);
    return;
  }

  const responseMessage =
    guessValue > mysteryNumber
      ? "Too high!"
      : guessValue < mysteryNumber
      ? "Too low!"
      : "Correct Number!";

  document.querySelector(`.numResponseUI`).textContent = responseMessage;

  if (guessValue === mysteryNumber) {
    document.querySelector(
      `.high-score`
    ).textContent = `Highscore: ${currentScore}`;
    document.querySelector(`.mysteryNumber`).textContent = mysteryNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    highScore = currentScore;
    gameHasEnded = true;
    AppendToLog(`Guessed ${guessValue}. This is the correct Number!`);
    AppendToLog(`Round has ended. Start a new round to play again.`);
  } else {
    currentScore--;
    document.querySelector(
      `.current-score`
    ).textContent = `Current Score: ${currentScore}`;
    AppendToLog(`Guessed ${guessValue}. This is ${responseMessage}.`);
  }
});

document.querySelector(`.numberInput`).addEventListener(`change`, function () {
  value = Number(document.querySelector(`.numberInput`).value);
  document.querySelector(`.numberInput`).value =
    value > maxGuessingNumber
      ? maxGuessingNumber
      : value < minGuessingNumber
      ? minGuessingNumber
      : value;
});

document.querySelector(`.restart-btn`).addEventListener(`click`, function () {
  InitNewGame();
});
