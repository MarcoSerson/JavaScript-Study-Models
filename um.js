// console.log("Hello World");
// let total = 1 + 3;
// if (total === 5) {
//   console.log("Great! You Win!");
// } else if (total === 4) {
//   console.log("Thats it!");
// }
// --------------------------------------------------------------------------------
// 0-5 - free
// 5 - 10 Child $10
// 10 - 65 Adult $20
// 65+ Senior $10
// --------------------------------------------------------------------------------

// const age = prompt("ENTER YOUR AGE:");

// if (age >= 1 && age < 5) {
//   console.log("You are a baby. You get in for free!");
// } else if ((age >= 5 && age < 10) || age >= 65) {
//   console.log("You are a Child or Senior. You pay $10!");
// } else if (age >= 10 && age < 65) {
//   console.log("Your are a Adult. Your pay $20!");
// } else {
//   console.log("Invalid Age. Please try again.");
// }

// -----------------------------------------------------------------------------------------------

// const phrase = prompt ('Enter the action:');

// function getColor(phrase){
//     //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
//    if (phrase == "stop") {
//        console.log ("red");
//    } else if  (phrase == "slow") {
//        console.log ("yellow");
//    } else if (phrase == "go") {
//        console.log ("green");
//    } else {
//        console.log ("purple");
//    }
// }
// -----------------------------------------------------------------------------------------------------

// let fName = prompt ("Please, enter your first name");
// if (!fName) {
//    fName = prompt ("Please, try again!");
// }

// --------------------------------------------------------------------------------------------------------

// const day = prompt("Please enter:");
// switch (day) {
//   case "1":
//     console.log("MONDAY");
//     break;
//   case "2":
//     console.log("TUESDAY");
//     break;
//   case "3":
//     console.log("WEDNESDAY");
//     break;
//   case "4":
//     console.log("THURSDAY");
//     break;
//   case "5":
//     console.log("FRIDAY");
//     break;
//   case "6":
//     console.log("SATURDAY");
//     break;
//   case "7":
//     console.log("SUNDAY");
//     break;
//   default:
//     console.log("I don't know that.");
// }

// ---------------------------------------------------------------------------------------------------------------

// const person = {
//   firstName: "Mick",
//   lastName: "Jagger",
// };

// const kitchenSink = {
//   favNum: 123,
//   isFunny: true,
//   colors: ["red", "orange"],
// };

// const comments = [
//     { username: "Tammy", text: "LoL", votes: 9 }
//     { username: "FishBoy", text: "Glub", votes: 123 }
// ];
// ---------------------------------------------------------------------------------------------------------------------

// for (let i=1; i<=10; i=i+2) {
//     console.log(i)
// }
// ----------------------------------

// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }
// // -------------------------------------
// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!
// for (let i=0; i<people.length; i++) {
//     console.log(people[i].toUpperCase());
//     }

//     for(let i=0 ;i<people.length; i++){

//         console.log(people[i].toUpperCase());

//     }
// // ------------------------------------------------------
// for (let i = 1; i <= 10; i++){
//     console.log (`i is: ${i}`)
//     for(let j = 1; j < 4; j++){
//         console.log(`     j is: ${j}`)
//     }
// }
// ---------------------------------------------------------

// const seatingChart = [
//   ["Kristen", "Erick", "Namita"],
//   ["Geofrrey", "Juanita", "Antonio", "Kevin"],
//   ["Yuma", "Sakura", "Jack", "Erika"],
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`ROW #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }
// ------------------------------------------------------------

// const bread = [
//   ["Donuts", "Sweet", "Cake"],
//   ["Franch", "Baguette", "Italian"],
//   ["Pannetone", "CheeseCake", "Arabian"],
// ];
// for (let i = 0; i < bread.length; i++) {
//   let tipes = bread[i];
//   if (i === 0) {
//   console.log('Sweet Bread available:');
//   } else if ( i === 1) {
//     console.log('Salt Bread available:');
//     } else {
//         console.log('Special Bread available:');
//         }
//   for (let j = 0; j < tipes.length; j++) {
//     console.log(`     ${tipes[j]}`);
//   }
// }
// -----------------------------------------------------------------

// let num = parseInt(prompt("Please guess a number Between 0 to 100!"));
// const correctNum = Math.floor(Math.random() * 100) + 1;
// while (num !== correctNum) {
//   if (num < correctNum) {
//     num = parseInt(prompt(`More than ${num}`));
//   } else if (num > correctNum) {
//     num = parseInt(prompt(`Less than ${num}`));
//   } else if (num === correctNum) break;
//   else if (num === "q" || num === "Q") break; // to quit
//   else {
//     num = prompt("Please guess a NUMBER"); // If the person worte any letter except Q or q.
//   }
// }
// if (num === correctNum) {
//   console.log("YOU WIN!");
// } else {
//   console.log("Right! You Quit!");
// }
// ------------------------------------------------------------------------

// let what = prompt("What do you Like to do?");
// let todo = [];
// while (what !== "quit" && what !== "Quit" && what !== "QUIT") {
//   if (what === "new") {
//     const ntodo = prompt("Please enter a new todo!");
//     todo.push(ntodo);
//     console.log(`${ntodo} added to list`);
    
//     what = prompt("What do you Like to do?");
//   } else if (what === "list") {
//     console.log("***********************");
//     for (let i = 0; i < todo.length; i++) {
//       console.log(`${i} - ${todo[i]}`);
//     }
//     console.log("***********************");
//     what = prompt("What do you Like to do?");
//   } else if (what === "delete") {
//     const del = parseInt(prompt("PLease enter the index of Item to delete:"));
//     if (!Number.isNaN(del)) {
//     const deleted = todo.splice(del, 1);
//     console.log(`Item ${deleted} deleted.`);
// } else {
//     console.log("Invalid Index.")
// }
//     what = prompt("What do you Like to do?");
//   } else {
//     what = prompt("What do you Like to do?");
//   }
// }
// console.log("Thank you! You quit!");
// -------------------------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach(function print(a) {
//   console.log(a);
// })
// -------------------------------------------------------------------------------

// const grades = [
//   { Name:'Marco',
//     Grade: 10
//   },

//   { Name: 'John',
//     Grade: 9
//   },

//   { Name: 'Jeff',
//     Grade: 8
//   },

//   { Name: 'Alien',
//     Grade: 7
//   }   
// ]

// const primeiro = grades.forEach(
//   function (grades){
//     console.log (`${grades.Name} : ${grades.Grade}/10`);
    
// })

// // --------------------------------------------------------------------------------------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const double = numbers.map (
//   function (num) {
//     return num * 2;
//   }
// )
// -----------------------------------------------------------------------------------------
// const greet = name => {
//   return `Hey ${name}`;
// }

// const greet2 = name => (
//   `Hey ${name}!`
//   )

// const greet3 = name => `Hey ${name}!`
// ---------------------------------------------------------------------------------------------
// const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// const open = numbers.filter((n) => {
// 	return n < 6;
// });
// -------------------------------------------------------------------
// const books = [
// 	{
// 		autor: 'Taleb',
// 		title: 'Black Cisne',
// 		year: 2000
// 	},
// 	{
// 		autor: 'Souza, Mauricio',
// 		title: 'Turma da Monica',
// 		year: 1990
// 	},
// 	{
// 		autor: 'Marco Antonio',
// 		title: 'Pensamentos',
// 		year: 100
// 	},
// 	{
// 		autor: 'Bill Bryson',
// 		title: 'At Home',
// 		year: 2010
// 	},
// 	{
// 		autor: 'David',
// 		title: 'Napoleão',
// 		year: 1984
// 	}
// ];

// const rec = books.filter((r) => r.year >= 2000);
// const old = books.filter((o) => o.year < 2000);
// const tit = books.filter((t) => t.year >= 2000).map((t) => t.title);
// // ----------------------------------------------------------------------------
// prices = [ 1.5, 13, 12, 20, 35, 40, 67, 1, 2, 3 ];

// const minPrice = prices.reduce((min, price) => {
// 	if (price < min) {
// 		return price;
// 	}
// 	return min;
// });
// ------------------------------------------------------------------------------
const books = [
	{
		autor: 'Taleb',
		title: 'Black Cisne',
		year: 2000
	},
	{
		autor: 'Souza, Mauricio',
		title: 'Turma da Monica',
		year: 1990
	},
	{
		autor: 'Marco Antonio',
		title: 'Pensamentos',
		year: 100
	},
	{
		autor: 'Bill Bryson',
		title: 'At Home',
		year: 2010
	},
	{
		autor: 'David',
		title: 'Napoleão',
		year: 1984
	}
];

const newest = books.reduce(
	(newbook, currbook) => {
		if (currbook.year > newbook.year) {
			return currbook;
		}
		return newbook;
	},
	{
		autor: 'Marco',
		title: 'Dev',
		year: 2011
	}
);
