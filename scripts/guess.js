let secret = Math.floor(Math.random() * 10 + 1);
console.log(secret);
let guesses = 0;
let GuessCount = 3;
let PlayerGuess;
let gameOver = false;

while (guesses < GuessCount && !gameOver) {
	PlayerGuess = Number(prompt("Pick a number between 1 and 10"));
	if (PlayerGuess === secret) {
		//player wins
		gameOver = true;
		alert("wow good job you won!");
	} else {
		if (PlayerGuess < secret) {
			alert("to low!");
		} else {
			alert("to high!");
		}
	}
	guesses++;
}

if (!gameOver) {
	alert("Wow you lost! Little Stinky Baby Man! hahaha (: ");
}
