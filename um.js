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
