/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

console.log("Yee Haw Lads");

let suit = "spades";
let face = "queen";
let value = 10;

let isface = true;

let aceOfSpades = {
	suit: "spades",
	face: "ace",
	value: 1,
	isface: false,
};

console.log(aceOfSpades.toString());
