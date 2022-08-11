/*
Coding time!
Here are a few pieces of advice about these exercises:

Keep on choosing your variable names wisely, and respect indentation when creating code blocks associated to if, else and switch statements.

Try to find alternative solutions. For example, one using an if and another using a switch.

Test your programs thoroughly, without fear of finding mistakes. It's a very important skill.
*/

/*
Following day
Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
*/

let dayName = prompt("What day is today?");
if (dayName === "monday") {
  console.log("Tomorrow is Tuesday");
} else if (dayName === "tuesday") {
  console.log("Tomorrow is Wednesday");
} else if (dayName === "wednesday") {
  console.log("Tomorrow is Thursday");
} else if (dayName === "thursday") {
  console.log("Tomorrow is Friday");
} else if (dayName === "friday") {
  console.log("Tomorrow is Saturday");
} else if (dayName === "saturday") {
  console.log("Tomorrow is Sunday");
} else if (dayName === "sunday") {
  console.log("Tomorrow is Monday");
} else {
  console.log("That is not one of the days of the week.");
}

/*
Number comparison
Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
*/

let num1 = Number(prompt("Give me a number"));
let num2 = Number(prompt("Give me a second number"));

if (num1 === num2) {
  console.log(`${num1} is equal to ${num2}`);
} else if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
} else if (num1 < num2) {
  console.log(`${num1} is less than ${num2}`);
} else if (num1 >= num2) {
  // these checks never happen
  console.log(`${num1} is greater than or equal to ${num2}`);
} else if (num1 <= num2) {
  console.log(`${num1} is less than or equal to ${num2}`);
} else if (num1 >= num2) {
  console.log(`${num1} is greater than or equal to ${num2}`);
} else {
  console.log("Invalid input.");
}

/*
Final values
Take a look at the following program.
Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.
*/

let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);
//console.log(4, 3, 2) = nb1: 2*3 = 6
//console.log(1, 2, 3) = nb1: ++i = 2, (2>3 =false) so else nb1: 0, nb3: 3*2+2=8

/*
Initial values	    nb1   nb2   nb3 
nb1=nb2=nb3=4			  0     4     12
nb1=4,nb2=3,nb3=2   4     3     3			
nb1=2,nb2=4,nb3=0		3     4     0	
Check your predictions by executing the program.

/*
Number of days in a month
Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
*/

let month = Number(prompt("What is the month number?"));

switch (month) {
  case 1:
    console.log("There are 31 days in this month");
    break;
  case 2:
    console.log("There are 28 days in this month");
    break;
  case 3:
    console.log("There are 31 days in this month");
    break;
  case 4:
    console.log("There are 30 days in this month");
    break;
  case 5:
    console.log("There are 31 days in this month");
    break;
  case 6:
    console.log("There are 30 days in this month");
    break;
  case 7:
    console.log("There are 31 days in this month");
    break;
  case 8:
    console.log("There are 31 days in this month");
    break;
  case 9:
    console.log("There are 30 days in this month");
    break;
  case 10:
    console.log("There are 31 days in this month");
    break;
  case 11:
    console.log("There are 30 days in this month");
    break;
  case 12:
    console.log("There are 31 days in this month");
    break;
  default:
    console.log("Please provide a number between 1-12");
}

/*
Following second
Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

This is not as simple as it seems... Look at the following results to see for yourself:

14h17m59s => 14h18m0s
6h59m59s => 7h0m0s
23h59m59s => 0h0m0s (midnight)
*/

let hour = Number(prompt("Give me the hour"));
let minute = Number(prompt("Give me the minute"));
let second = Number(prompt("Give me the second"));
/*
if (
  hour >= 0 &&
  hour < 24 &&
  minute >= 0 &&
  minute < 60 &&
  second >= 0 &&
  second < 60
) {
  hour++;
  minute++;
  second++;
  console.log(`${hour++}h${minute++}m${second++}s`);
} else {
  hour = 0;
  minute = 0;
  second = 0;
  console.log(`${hour++}h${minute++}m${second++}s`);
}

if (hour >= 0 && hour < 24) {
  hour++;
} else {
  hour = 0;
}

if (minute >= 0 && minute < 60) {
  minute++;
} else {
  minute = 0;
}

if (second >= 0 && second < 60) {
  second++;
} else {
  second = 0;
}

console.log(`${hour}h${minute}m${second}s`);
//output of 14h17m59s is 15h18m60s........ i'll come back to this
*/
