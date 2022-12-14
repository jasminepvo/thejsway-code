/*
Coding time!
Create all these programs in a generic fashion: the program output should reflect any update in the array's content.

Musketeers
Write a program that:
*/
//Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
const musketeers = ["Athos", "Porthos", "Aramis"];

//Shows each array element using a for loop.
for (let i = 0; i < musketeers.length; i++) {
	console.log(musketeers[i]);
}

//Adds the "D'Artagnan" value to the array.
musketeers.push("D'Artagnan");

//Shows each array element using the forEach() method.
musketeers.forEach((musketeer) => console.log(musketeer));

//Remove poor Aramis.
musketeers.splice(2, 1); //remove 1 element starting at index 2
//Shows each array element using a for-of loop.
for (const musketeer of musketeers) {
	console.log(musketeer);
}

/*
Sum of values
Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
*/
const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
for (const value of values) {
	sum += value;
	console.log(sum);
}

/*
Array maximum
Write a program that creates the following array, then calculates and shows the array's maximum value.
*/
const values1 = [3, 11, 7, 2, 9, 10];
console.log(Math.max(...values1));

/*
List of words
Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
*/
const words = [];

let word = "";
while (word !== "stop") {
	word = prompt("Give me a word. Say 'stop' when you want to stop");
	if (word !== "stop") {
		words.push(word);
	}
}
for (const w of words) {
	console.log(w);
}
