"use strict";

// const firstName = "Jones";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonesNew = `I am ${firstName}, a ${job} who is ${year-birthYear} years old!`

// console.log(jonesNew);

// console.log(
// `String with
// multiple
// Lines`
// );

//________________________________________________________________________________

// const requiredAge = 18;
// const age = 7;
// const isOldEnough = age >= requiredAge;

// if(isOldEnough)
// {
//     console.log("you are old enough to start your drivers license!");
// }
// else 
// {
//     const yearsLeft = requiredAge-age;
//     console.log(`you must wait ${yearsLeft} years before you may start your drivers license!`)
// }

//________________________________________________________________________________

// const year = 2022;
// const century = Math.floor(year/100)+1;

// console.log(century);

//________________________________________________________________________________

// const markMass = 129;
// const markHeight = 1.5;

// const joshMass = 89;
// const joshHeight = 1;

// function BMI(mass, height)
// {
//     let BMIvalue = mass / (height * height);
//     BMIvalue = Math.round(BMIvalue * 10)/10;
//     return BMIvalue;
// }

// const BMImark = BMI(markMass,markHeight);
// const BMIjosh = BMI(joshMass,joshHeight);

// console.log(BMImark > BMIjosh? 
//     `Marks BMI (${BMImark}) is greater than Joshs BMI (${BMIjosh})`:
//     `Joshs BMI (${BMIjosh}) is greater than Marks BMI (${BMImark})`)

//__________________________________________________________________________________
//
// const inputYear = `1991`;
// console.log(Number(inputYear)+18)
//__________________________________________________________________________________
// === is strict comparision (no type coercion)
// == is soft comparison
// != and !== are analog to this.
// _________________________________________________________________________

// Challenge 3

// const DolphinScore = 111 + 105 + 98;
// const KoalaScore = 1 + 91 + 110;
// const matches = 3;

// function Average(combinedValue)
// {
//     return combinedValue/matches;
// }

// function IsElegibleForWin(averageTeamScore)
// {
//     return averageTeamScore >= 100;
// }

// if(DolphinScore === KoalaScore && IsElegibleForWin(Average(DolphinScore)))
// {
//     console.log(`There was a draw with both teams having an average score of ${Average(DolphinScore)}`);
// }
// else
// {
//     if(DolphinScore > KoalaScore && IsElegibleForWin(Average(DolphinScore)))
//     {
//         console.log(`Dolphins have won with ${Math.round(Average(DolphinScore))} average score`);
//     }
//     else if(KoalaScore > DolphinScore && IsElegibleForWin(Average(KoalaScore)))
//     {
//         console.log(`Koalas have won with ${Math.round(Average(KoalaScore))} average score`);
//     }
//     else console.log("Neither team has won as they are both not elegible for a victory. Tough luck.")
// }

// Strict mode| blocks you from using reserved names 
// Strict mode| creates errors for other, otherwise not written errors
//____________________________
// FUNCTIONS
//______________________________
// function sampleFunction(value)
// {
//     return value - 2000;
// }
// const test1 = function(value)
// {
//     return value+1;
// }
//______________
// const arrowFunctionExample = (value,value2) => value-value2;

// console.log(arrowFunctionExample(7,207));
// This is a shortened form of the arrow Function
//_____________
// const yearsUntilRetirement = (birthYear,firstName) => 
// {
//     const age = 2023-birthYear;
//     const retirementAge = 65-age;
//     return `${firstName} retires in ${retirementAge} years!`;
// }
// console.log(yearsUntilRetirement(2006,`gamer`));
//__________________________________________________________

// let yearsUntilRetirement = function(birthYear,firstName) 
// {
//     const age = calcAgeFromBirthYear(birthYear);
//     const retirementAge = 65-age;
//     return `${firstName} retires in ${retirementAge} years!`;
// }

// function calcAgeFromBirthYear(birthYear) {
//     return 2023 - birthYear;
// }
//___________________________________________
// C# delegate syntax
// delegate name(double);
// name = calcTax;

// public void calcTax(double i)
// {

// }
//________________________________________________
// const matchCount = 3;

// const calcAverage = (addedValue) => addedValue/matchCount;

// const dolphinsAverage = calcAverage(1111+23+71);
// const koalasAverage = calcAverage(50+35+90);

// function checkWinner(d_average,k_average)
// {
//     if(d_average === k_average)
//     {
//         console.log(`there was a draw with ${d_average} : ${k_average}`);
//     }
//     else if(d_average >= k_average * 2)
//     {
//         console.log(`Dolphins won with ${d_average} : ${k_average}`)
//     }
//     else if(k_average >= d_average * 2)
//     {
//         console.log(`Koalas won with ${k_average} : ${d_average}`)
//     }
//     else console.log(`There was no winner with d:k => ${d_average} : ${k_average}`)
// }

// checkWinner(dolphinsAverage,koalasAverage);
//_________________________________________________________

// const calcAge = function (birthYear) {
//     return 2037-birthYear;
// }
// const years = [1990,1967,2002,2010,2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);

// const ages = [age1,age2,age3];

// console.log(ages);

// ages.push(2);
// ages.push(2);
// ages.unshift(999);
// ages.pop();

// console.log(ages);
// _______________________________________________________________

// const calcTip = (billValue) => (billValue >= 50 && billValue <300) ? (billValue * 0.15) : (billValue * 0.2);

// const bills = [123,48,999,17.5,230];
// const tips = [];

// bills.forEach(billValue => {
//     tips.push(calcTip(billValue));
// });

// const fullBills = [];

// for (let index = 0; index < bills.length; index++) {
//     const billValue = bills[index];
//     const tipValue = tips[index];

//     fullBills.push(billValue + tipValue);
// }

// console.log(bills);
// console.log(tips);
// console.log(fullBills);
//___________________________________________________________________

// // Object Literal Syntax (just writing down the content)
// const jonas = {
//     firstName: `Jonas`,
//     lastName: `Schmedtmann`,
//     age: 2037 - 1991,
//     job: `teacher`,
//     friends: [`Michael`,`Peter`,`Steven`],
//     location: ``
// };
// //actual Property Name -> Value
// console.log(jonas.lastName);
// // computed/Expression result string -> Property Name -> Value
// console.log(jonas[`lastName`]);

// const nameKey = `last`;
// console.log(jonas[`${nameKey}Name`])

// // both can edit values and create new oject properties. 
// jonas[`twitter`] = `@randomTwitterDoNotBuy`;
// jonas.location = `Portugal`;

// const desiredValue = prompt(`What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends`);
// if(jonas[desiredValue]){
// console.log(jonas[desiredValue]);
// } else {
//     console.log(`The value you requested does not exist. Did you make a spelling error?`)
// }


// console.log(`There is this ${jonas.location} ${jonas.job} named ${jonas.firstName} ${jonas.lastName}. 
// He is ${jonas.age} years old and has ${jonas.friends.length} friends. His twitter is ${jonas.twitter}`)
//_______________________________________________________________________________________

// const jonas = {
//     firstName: `Jonas`,
//     lastName: `Schmedtmann`,
//     age: 29,
//     job: `teacher`,
//     friends: [`Michael`,`Peter`,`Steven`],
//     location: `Portugal`,

//     getSummary: function(){
//     return `The person you are inspecting is named ${this.firstName} ${this.lastName}. 
//     They are a ${this.job} and ${this.age} years old. 
//     They have ${this.friends.length} friends and live in ${this.location}.`;
//     }
// };

// console.log(jonas.getSummary());

// _____________________________________________________________________________________________

// const Mark = {
//     firstName: "Mark",
//     lastName: "Market",
//     mass: 120,
//     height: 1.5,
//     bmi : 0,

//     calcBMI: function() {
//         this.bmi = this.mass/(this.height**2);
//         return this.bmi;
//     }
// }

// const John = {
//     firstName: "John",
//     lastName: "Jockey",
//     mass: 80,
//     height: 1.8,
//     bmi : 0,

//     calcBMI: function() {
//         this.bmi = this.mass/(this.height**2);
//         return this.bmi;
//     }
// }

// Mark.calcBMI();
// John.calcBMI();

// const highBMI = Mark.bmi > John.bmi ? Mark : John;
// const lowBMI  = Mark.bmi > John.bmi ? John : Mark;

// console.log(`${highBMI.firstName} ${highBMI.lastName} has a higher BMI (${highBMI.bmi}) than 
// ${lowBMI.firstName} ${lowBMI.lastName} (${lowBMI.bmi}). That sure is ${highBMI.bmi > 49? "sad" : "funny"}.`)

//___________________________________________________________________________________________________

// // for loop is same as always
// for(let i = 1; i < 5; i ++){
//     console.log(`This is count number ${i}`);
// }
//____________________________________

// const jonasArray = [
//     `Jonas`,
//     `Schmedtmann`,
//     2037-1991,
//     `teacher`,
//     [`Michael`,`Peter`,`Steven`]
// ];

// const types = [];
// for(let i = 0; i<jonasArray.length; i++)
// {
//     console.log(jonasArray[i], typeof(jonasArray[i]));

//     if(typeof(jonasArray[i]) !== `string`) continue;
//     types.push(typeof(jonasArray[i]));
// }

// console.log(types)
//_______________________________________
// let dice = 0;
// let rolls = 0;
// let amountOfSixes = 0;
// while(amountOfSixes < 100){
//     rolls++;
//     dice = Math.trunc(Math.random()*6)+1;
//     console.log(`You have rolled a ${dice}. ${dice === 6 ? `COUNT UP` : ``}`)
//     if(dice === 6){
//         amountOfSixes++;
//     }
// }

// console.log(`the chance for a six by these rolls was ${100/rolls}
// Expected value was ${1/6}. 
// The chance for a six was ${Math.abs(100*(1-((100/rolls)/(1/6))))} percent ${100/rolls > 1/6 ? `greater` : `less`} than expected!`)
//_________________________________________