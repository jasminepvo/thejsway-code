/* 
Adding character experience
Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.
*/
// TODO: create the character object here
const aurora = {
	health: 150,
	strength: 25,
	xp: 0,
	describe() {
		return `Aurora has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
	},
};
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());
//Aurora has 130 health points, 35 as strength and 15 XP points
/*
Modeling a dog
Complete the following program to add the dog object definition.
*/
// TODO: create the dog object here
const dog = {
	name: "Peter",
	species: "rottweiler",
	size: "80lbs",
	bark() {
		return `Grrr! Grrr!`;
	},
};
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
//Peter is a rottweiler dog measuring 80lbs
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
//Look, a cat! Peter barks: Grrr! Grrr!

/*
Modeling a circle
Complete the following program to add the circle object definition. Its radius value is input by the user.
*/
const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
	circumference() {
		return 2 * Math.PI * r;
	},
	area() {
		return Math.PI * Math.pow(r, 2);
	},
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

/*
Modeling a bank account
Write a program that creates an account object with the following characteristics:

A name property set to "Alex".
A balance property set to 0.
A credit method adding the (positive or negative) value passed as an argument to the account balance.
A describe method returning the account description.
Use this object to show its description, crediting 250, debiting 80, then show its description again.
*/
