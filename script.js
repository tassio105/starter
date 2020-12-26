/*
console.log(40 + 8 + 23 - 10);
let firstName = "Tassio";
console.log(firstName);

let country = 'Country';
let continent = 'Continent';
let population = 'Population';

if (country === 'Country' && continent === 'Continent' && population === 'Population') {
    let country = "Brazil";
    let continent = "South America";
    let population = 212.6;
    console.log(country, continent, population, "billions");
}


//if (country === 'Country') console.log("Brazil");
//if (continent === 'Continent') console.log("South America");
//if (population === 'Population') console.log("212.6 Billion people");
*/

// Variable types
//true;
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Tassio');

javascriptIsFun = 'Yes';
console.log(typeof javascriptIsFun);
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

// Exercise - 2
let country = 'Country';
let population = 'Population';

let isIsland;
let language;
isIsland = true;
if (isIsland === true) {
    isIsland = "Fernando de Noronha";
}
language = 'Portuguese';

console.log(isIsland, ",", population, ",", country, ",", language);
*/

// Lecture 3 - Cons and var
/*
let age = 30;
age = 31;

//console.log(age);

const birthYear = 1991;
// birthYear = 1990; - a constant cannot be changed

//const job; //need a initial value in order to place a constant. Missing initializer error

var job = 'programmer';
job = 'teacher'

lastName = 'Andrade';
console.log(lastName);
*/

//Lecture 4 - Operatiors 
/*
const now = 2037; // used to declare a variable that will not be changed
const ageTassio = now - 1991;
const ageSarah = now - 2018;
console.log(ageTassio, ageSarah);

console.log(ageTassio * 2, ageTassio / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Tassio';
const lastName = 'Andrade';
console.log(firstName + ' ' + lastName); //concatination using '+' sign

let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x +1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageTassio > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

//Lecture 5 - operators precedence
/*
const now = 2037; // used to declare a variable that will not be changed
const ageTassio = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); // based on mdn operator precedence - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // subtraction will start first due to the operator precedence and then the assignment '=' will start next
console.log(x, y);

const averageAge = (ageTassio + ageSarah) / 2;
console.log(ageTassio, ageSarah, averageAge);
*/

//Lecture 6 - code challenge

/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
Test Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
Test Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// TEST 1
//const BMI = mass / height ** 2; //= mass / (height * height);

/*

let markBMI;
let johnBMI;

const markHeight = 1.69;
const johnHeight = 1.95;

let markWeight = 78;
let johnWeight = 92;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

console.log('Mark BMI is equal to: ' + markBMI + ' and John BMI is equal to ' + johnBMI);

//TEST 2

let markBMI2;
let johnBMI2;

const markHeight2 = 1.88;
const johnHeight2 = 1.76;

let markWeight2 = 95;
let johnWeight2 = 85;

markBMI2 = markWeight2 / markHeight2 ** 2;
johnBMI2 = johnWeight2 / johnHeight2 ** 2;

console.log('Mark BMI is equal to: ' + markBMI2 + ' and John BMI is equal to ' + johnBMI2);

let markHigherBMI = markBMI > johnBMI;
let johnHigherBMI = johnBMI > markBMI;
let markHigherBMI2 = markBMI2 > johnBMI2;
let johnHigherBMI2 = johnBMI2 > markBMI2;

console.log(markHigherBMI, johnHigherBMI);
console.log(markHigherBMI2, johnHigherBMI2);

// other ways to write the challenge
mark_Weight = 70;
mark_Height = 1.70;
john_Weight = 75;
john_Height = 1.80;

let mark_BMI = mark_Weight / mark_Height ** 2;
let john_BMI = john_Weight / john_Height ** 2;

let comparison_MarkAndJohn;

if (mark_BMI > john_BMI) {
    //comparison_MarkAndJohn = mark_BMI;
    console.log('Mark BMI is ' + mark_BMI + ' and John BMI is ' + john_BMI + '. Mark has a higher BMI than John.');//, comparison_MarkAndJohn);
}
else {
    //comparison_MarkAndJohn = john_BMI;
    console.log('Mark BMI is ' + mark_BMI + ' and John BMI is ' + john_BMI + '. John has a higher BMI than Mark.');//, comparison_MarkAndJohn);
}

// Resolution of the challenge

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const markHigher_BMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigher_BMI);
*/

// Strings and template literals

/*
const firstName = 'Tassio';
const job = 'Programmer';
const birthYear = 1991;
const year = 2020;

const tassio = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(tassio);

//use of back quotes `` to write text without having to concatinate and create spaces manually.
const tassioNew = `I'm ${firstName}, a ${(year - birthYear)} years old ${job}.`;
console.log(tassioNew);

console.log(`Just a regular string...`);
// using \n\ to write multiple lines on the console
console.log('String with \n\
multiple \n\
lines');
//easier way to write lines using ``
console.log(`String
with multiple
lines`);
*/

/*
//Taking Decisions using IF/ELSE statements
const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗');
}

//other way to write + using else statement

const age_ = 15;

if (age_ >= 18) {
    console.log('Sarah can start driving license 🚗');
}
else {
    const yearsLeft = 18 - age_;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);
*/

// Challenge 2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 150;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

let BMIdifference = BMIMark - BMIJohn; // if John's BMI is higher the number will be negative. 
// quick solution I could think of was multiplying the result of else statement by (-1)
// because BMIJohn if bigger will always give a negative BMIdifference.
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI is equal to ${BMIMark.toFixed(1)}
Jonh's BMI is equal to ${BMIJohn.toFixed(1)}
Mark BMI is ${BMIdifference.toFixed(1)} bigger than John's.`);
    //console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's BMI (${BMIJohn.toFixed(1)})`);
}
else {
    console.log(`Mark's BMI is equal to ${BMIMark.toFixed(1)}
Jonh's BMI is equal to ${BMIJohn.toFixed(1)}
John's BMI is ${(-1) * BMIdifference.toFixed(1)} bigger than John's.`); // multiplied BMIdifference by -1 to get always a positive value.
    //console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's BMI (${BMIMark.toFixed(1)})`);
}