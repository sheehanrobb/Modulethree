// Section 1
// console.log("" + 1 + 0) 10 as the + performs string concatenation
// console.log("" - 1 + 0); -1 as operator performs arithmetic and empty string is converted to 0
// console.log(true + false);  1 in js true = 1 and false = 0
// console.log(!true);  false
// console.log(6 / "3");  2 "3'(string) is converted 3 (number)
// console.log("2" * "3" );// 6 both strings are converted to numbers
// console.log( 4 + 5 + "px")//"9px" artithmetic then conversion and concatenation with a string
// console.log("$" + 4 + 5); //"$45" string concatenation
// console.log("4" - 2); // 2
// console.log("4px" - 2); //NaN as 4px can't be converted to a number
// console.log(" -9 " + 5); //"-95" string concatenation
// console.log(" -9 " - 5); //-14 string is converted to number and equation can be completed
// console.log(null + 1); // 1 null is treated as 0 in arithmetic operations
// console.log'undefined + 1); // NaN- undefined can't be converted to a number
// console.log(undefined == null); // true both null and undefine in js are considered = to each other but not any other value
// console.log(undefined === null); //false these are not considered exactly equal
// console.log(" \t \n" - 2");-2 string is considered and empty string and therefore can be converted to number 0

//Section2
/*
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?

let addition = three + four //34 (concatenation)
console.log(addition)
let multiplication = three * four//12
console.log(multiplication)
let division = three / four//0.75
console.log(division);
let subtraction = three - four
console.log(subtraction); -1

let lessThan1 = three < four // True
console.log(lessThan1)
let lessThan2 = thirty < four//Truelexigraphical order so its comparing the 3 in thirty to the 4
console.log(lessThan2)
*/

/* Q3- Which of the following console.log messages will print? Why?
if(0) console.log('#1 zero is true') won't print
if ("0") console.log('#2 zero is true')will print
if (null) console.log('null is true') won't print
if (-1) console.log('negative is true')will print
if (1) console.log('positive is true') will print

reasons: 0, null, undefined, empty String, false and NaN are considered falsy and will not execute  in an if statement.
any other value is considered truthy and will execute in the if statements
*/

/*
let a = 2, b = 3;
let result = `${a} + ${b} is `;
console.log(result)
if (a + b < 10) ==> (a,b) {
result += 'less than 10';
} else {
result += 'greater than 10';
}
*/
// rewritten

//let a = 2, b = 3;
//let result = `${a} + ${b} is`  + ((a + b < 10) ? 'less than 10' : 'greater than 10');



// Q5

// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function
// syntax. Test each version to make sure they work the same.

function getGreeting(name) {
return 'Hello ' + name + '!';
}

//a) function expression
const getGreeting = function(name) {
    return `Hello ${name}!`;
}
console.log(getGreeting('Sheehan'));

or

const getGreeting = function(name) {
    return ('Hello ' + name + ' !');
}
console.log(getGreeting('Sheehan'));

//b) arrow
const getGreeting = (name) => ('Hello ' + name + " !");
console.log(getGreeting('Sheehan'));

or

const getGreeting = (name) => (`Hello ${name} !`)
console.log(getGreeting('Sheehan'));

/*
//Q6
//A and B

const westley = {
    name: 'Westley',
    numFingers: 5
 }
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {

    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `
    console.log(greeting + this.getCatchPhrase(person));
    },

    getCatchPhrase:(person) => {

        return person.numFingers === 6 ? "You killed my father, Prepare to Die!" : "Nice to meet you";
    }

}

    inigo.greeting(westley)
    inigo.greeting(rugen)
*/

   /*Q7
   const basketballGame = {
    score: 0,

    freeThrow() {
    this.score++;
    return this
    },

    dunk() {
    this.score += 4;
    return this
    },

    layup() {
    this.score += 2;
    return this
    },

    threePointer() {
    this.score += 3;
    return this
    },

    halfTime() {
    console.log('Halftime score is ' + this.score);
    return this
    },

    fullTime() {
    console.log('fulltime score is ' + this.score);
    return this
    }
    }

    //modify each of the above object methods to enable function chaining as below:
    basketballGame.freeThrow().freeThrow().dunk().layup().threePointer().halfTime().dunk().fullTime();
    */

    //Q8
   /*
    const sydney = {
        name: 'Sydney',
        population: 5_121_000,
        state: 'NSW',
        founded: '26 January 1788',
        timezone: 'Australia/Sydney'
    }
    const auckland = {
        name: 'Auckland',
        population: 1_421_000,
        state: 'AKL',
        founded: '6 February 1890', //none of this information is claiming to be correct just for practicing
        timezone: 'NZT'
    }

    function printcity(city) {
        for (prop in city) {
           console.log(prop, '=' + city[prop]);
        }
   }

printcity(sydney)
printcity(auckland)
*/
/* Q9
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
const moreSports = new Array('Hockey', 'Cricket', 'Volleyball');
moreSports.push('Football', 'Gymnastics', 'Rockclimbing');
moreSports.unshift('Netball', 'Snowboarding');


console.log(moreSports)
*/
/*
let dog1 = 'Bingo';
let dog2 = dog1;
dog2 = 'fido';
console.log(dog2)



let cat1 = { name: 'Fluffy', breed: 'Siberian' };
console.log(cat1)
let cat2 = Object.assign({},cat1);
cat2.name = 'Rascal'
console.log(cat2.name)
*/
//e) to change the way 'moreSports and cat2 are created to ensure the original remains independant
/*
let moreSports = [...teamSports];//create a new array with the same elements as teamSports
moreSports.push('Football'); //adds a new sport to the end
moreSports.unshift('Gymnastics');

let cat2 = {...cat1};//creates a new object with the same properties
cat2.name = 'Rascal'; // changes the name property
*/
//Q10