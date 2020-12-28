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
*/
/*
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Tassio')); // NaN - Not a Number - invalid number
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log(`I'm ${29} years old.`);
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1;
n--;
console.log(n);
*/

// BOOLEAN - TRUEPHY AND FALSY

// 5 falsy values: 0, '', undefined, null, NaN
// the rest will be truephy values
/*
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Tassio')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 0; // money equal 0 , thus is a false value for boolean.
if (money) {
    console.log(`Don't spend it all ;)`);
}
else {
    console.log(`You should get a job!`);
}

let height; // height is undefined so result of boolean will be false.
if (height) {
    console.log('YAY! Height is defined');
}
else {
    console.log('Height is UNDEFINED');
}
*/
/*
const age = 18;
//const age = '18';
if (age === 18) console.log(`You just became an adult. (strict)`); // === only if the value is definetely equal to the next
if (age == 18) console.log(`You just became an adult. (loose)`); // == will use type coercion to identify if value is equal to the next

//const favourite = prompt("What's your favourite number?");
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

//if (favourite == 12)
if (favourite === 12) {
    console.log(`Cool! 12 is a great number!`);
}
else if (favourite === 7) {
    console.log(`7 is not as cool as 12 :(`) // can use 'else if' as long as I want
}
else {
    console.log(`Number is not 12 nor 7. Sorry`)
}

if (favourite !== 12) console.log(`Why not 12?`); // !== not equal symbol
*/

// BOOLEAN LOGIC: THE AND, OR & NOT OPERATORS

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log(`Sarah is able to drive.`)
// }
// else {
//     console.log(`Someone else should drive...`)
// }

// const isTired = true; // C
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive.`)
// }
// else {
//     console.log(`Someone else should drive...`)
// }

// CHALLENGE 3 
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😀
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
 Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
 Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
 Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
/*
// DATA 1
// const dolphinsGame1 = 96;
// const dolphinsGame2 = 108;
// const dolphinsGame3 = 89;

// const koalasGame1 = 88;
// const koalasGame2 = 91;
// const koalasGame3 = 110;

// DATA 2
// const dolphinsGame1 = 97;
// const dolphinsGame2 = 112;
// const dolphinsGame3 = 101;

// const koalasGame1 = 109;
// const koalasGame2 = 95;
// const koalasGame3 = 123;

// DATA 3
const dolphinsGame1 = 97;
const dolphinsGame2 = 112;
const dolphinsGame3 = 80;

const koalasGame1 = 109;
const koalasGame2 = 95;
const koalasGame3 = 50;

const dolphinsAverage = (dolphinsGame1 + dolphinsGame2 + dolphinsGame3) / 3;
const koalasAverage = (koalasGame1 + koalasGame2 + koalasGame3) / 3;

if ((dolphinsAverage > koalasAverage) && dolphinsAverage >= 100) {
    console.log(`Dolphins won the best of 3 with ${dolphinsAverage.toFixed(1)}. Congrats!!`);
}
else if ((koalasAverage > dolphinsAverage) && koalasAverage >= 100) {
    console.log(`Koalas won the best of 3 with ${koalasAverage.toFixed(1)}. Congrats!!`);
}
else if (dolphinsAverage === koalasAverage) {
    console.log(`It was a draw. Both teams did well and at the end everybody won.`);
}
else if ((dolphinsAverage > koalasAverage) && dolphinsAverage < 100) {
    console.log(`No winner. Even though Dolphins did well on the best of 3, the result was ${dolphinsAverage}. Try again next season!`);
}
else {
    console.log(`No winner. Even though Koalas did well on the best of 3, the result was ${koalasAverage}. Try again next season!`);
}
*/

/*
const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log(`Plan course structure`)
        console.log(`Go to coding meetup`)
        break;
    case 'tuesday':
        console.log(`Prepare theory videos`);
        break;
    case 'wednesday':
    case 'thurday':
        console.log(`Write code examples`);
        break;
    case 'friday':
        console.log(`Record videos`);
        break;
    case 'Saturday':
    case 'Sunday':
        console.log(`Enjoy the weekend ;)`)
        break;
    default:
        console.log(`Not a valid day!`)
}
*/

// Conditional operator
/*
const age = 17;
// age >= 18 ? console.log(`I like to drink beer`) :
//     console.log(`Should drink water`);

const drink = age >= 18 ? 'Beer' : `Water`;
console.log(drink);

// regular if statement
let drink2;
if (age >= 18) {
    drink2 = 'Beer'
}
else {
    drink2 = 'Water'
}

console.log(drink2);

// Using a conditional operator inside a console. Whatever produces a value, it can be stored in the place holder.
console.log(`I like to drink ${age >= 18 ? 'beer' : 'water'}`)
*/


// CHALLENGE 4


/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
 Data 1: Test for bill values 275, 40 and 430
Hints:
 To calculate 20% of a value, simply multiply it by 20/100 = 0.2
 Value X is between 50 and 300, if it's >= 50 && <= 300
*/

// const bill = 275;
// const bill = 40;
// const bill = 430;
// const tipLower = (15 / 100) * bill;
// const tipHigher = (20 / 100) * bill;
// const billTotalTipLower = tipLower + bill;
// const billTotalTipHigher = tipHigher + bill;

// bill >= 50 && bill <= 300 ? console.log(`We use 15% to calculate this bill. The bill was ${bill} and the tip was ${tipLower}. The total value is ${billTotalTipLower}.`) :
//     console.log(`We used 20% to calculate this bill. The bill was ${bill} and the tip was ${tipHigher}. The total value is ${billTotalTipHigher}.`);

// how the challenge was solved

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`);