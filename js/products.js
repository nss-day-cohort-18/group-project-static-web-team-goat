// Create an array to hold your products.
// Each item in the array must be an object that contains 
// the following information: name, description, price, and URL for product image.

const products = [

	{
		name: "Goatee",
		description: "Goat goose hen horse. Outhouse at nails mower.",
		price: "You can't put a price on our goats!",
		url: "images/goatee1.jpg"
	}, 
	{
		name: "Gary",
		description: "Ewes mushrooms zucchini in forage Harvester. ",
		price: "You can't put a price on our goats!",
		url: "images/gary2.jpg"
	}, 
	{
		name: "Grandpa",
		description: "Jelly peppers at plow basil swather, cat.",
		price: "You can't put a price on our goats!",
		url: "images/grandpa3.jpg"
	}, 
	{
		name: "Goatastic",
		description: "Haybine carrots soybeans, owls duck.",
		price: "You can't put a price on our goats!",
		url: "images/goatastic4.jpg"
	}, 
	{
		name: "Gypsy",
		description: "Bulls at rose garden cucumbers mice sunflower.",
		price: "You can't put a price on our goats!",
		url: "images/gypsy5.jpg"
	}, 
	{
		name: "Greatgoat",
		description: "Cat weathervane grain trucks, hoot pony robins.",
		price: "You can't put a price on our goats!",
		url: "images/greatgoat6.jpg"
	}, 
	{
		name: "Gitter",
		description: "Pets and storage shed, troughs feed bale manure. ",
		price: "You can't put a price on our goats!",
		url: "images/gitter7.jpg"
	}, 
	{
		name: "Grassy",
		description: "Coo with rabbits ect. Goat goose hen horse alligators quack. ",
		price: "You can't put a price on our goats!",
		url: "images/grassy8.jpg"
	}, 
	{
		name: "Grassman",
		description: "Wes fox, hay hook hay manure, John Deere radish barn. ",
		price: "You can't put a price on our goats!",
		url: "images/grassman9.jpg"
	}

];

//get div
const parent = document.getElementById("parent");

//iterate 
for (let product in products) {

//get keys and access values
//and build up the string all at once

	let card = `<article 
				class="products"> 
				<h2>${products[product].name}</h2> 
				<img src="${products[product].url}" class="prod-pic" alt="goat">
				<p>Description:</p>
				<p>${products[product].description}</p>
				<p>Price:</p>
				<p>${products[product].price}</p>
				</article>`;

 //put it in the div 
 
		parent.innerHTML += card;
};

