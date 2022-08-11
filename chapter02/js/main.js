/*
Coding time!
Build a habit of choosing good variable names in all exercises, starting with these ones.

Improved hello
Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
*/

//let fName = prompt("What is your first name?");
//let lName = prompt("What is your last name?");
//console.log(`${fName} ${lName}`);

/*
Final values
Observe the following program and try to predict the final values of its variables.
Check your prediction by executing it.
*/

let a = 2; //2
a -= 1; //1
a++; //2
let b = 8; //8
b += 2; //10
const c = a + b * b; //2 + 10*10 = 2 + 100 = 102
const d = a * b + b; //2*10 + 10 = 20 + 10 = 30
const e = a * (b + b); //2 * 10+10 = 2 * 20 = 40
const f = (a * b) / a; //2*10 / 2 = 20 / 2 = 10
const g = (b / a) * a; //10 / 2 * 2 = 5 * 2 = 10
console.log(a, b, c, d, e, f, g); //2, 10, 102, 30, 40, 10, 10

/*
VAT calculation
Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
*/

let rawPrice = Number(prompt("Give me a raw price"));
rawPrice *= 0.206;

/*
From Celsius to Fahrenheit degrees
Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.
*/

let celsius = Number(
  prompt("Give me a degree in Celsius to convert to Fahrenheit.")
);
console.log((celsius * 9) / 5 + 32);

/*
Variable swapping
Observe the following program.
*/
let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)
let temp = number1; //temp = 5
number1 = number2; //num1 = 3
number2 = temp; //num2 = 5

console.log(number1); // Should show 3
console.log(number2); // Should show 5
/*
Add the necessary code to swap the values of variables number1 and number2.

T> This exercise has several valid solutions. You may use more than two variables to solve it.
*/
