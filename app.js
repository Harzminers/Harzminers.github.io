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

console.log(document.querySelector(`.numResponseUI`).textContent);
