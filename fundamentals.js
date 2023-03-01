// Section 1
// console.log('"" + 1 + 0') 10 as the + performs string concatenation
// console.log('"" - 1 + 0'); -1 as operator performs arithmetic and empty string is converted to 0
// console.log('true + false');  1 in js true = 1 and false = 0
// console.log('!true');  false
// console.log('6 / "3"');  2 "3'(string) is converted 3 (number) 
// console.log('"2" * "3" ');// 6 both strings are converted to numbers
// console.log(' 4 + 5 + "px"')//"9px" artithmetic then conversion and concatenation with a string
// console.log('"$" + 4 + 5'); //"$45" string concatenation
// console.log('"4" - 2'); // 2
// console.log('"4px" - 2'); //NaN as 4px can't be converted to a number
// console.log('" -9 " + 5'); //"-95" string concatenation
// console.log('" -9 " - 5'); //-14 string is converted to number and equation can be completed
// console.log('null + 1'); // 1 null is treated as 0 in arithmetic operations
// console.log('undefined + 1'); // NaN- undefined can't be converted to a number
// console.log('undefined == null'); // true both null and undefine in js are considered = to each other but not any other value
// console.log('undefined === null'); //false these are not considered exactly equal
// console.log('" \t \n" - 2"'); string is considered and empty string and therefore can be converted to number 0

//Section2 

let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?

let addition = three + four //"34" concatenation of strings
// 'Nan' you can't multiply, divide, or subtract strings
let multiplication = three * four//
let division = three / four
let subtraction = three - four
// to fix you need to use the number function ' number (three) * number (four) '

let lessThan1 = three < four // true correct  if doing numerically
let lessThan2 = thirty < four// false if doing numerically, needs to be converted from stringsto nuumbers