const button = document.getElementById("flip-flop");

var click = 0;

button.addEventListener("click", (event) => {
	click++;
	if (click % 2 == 0) {
		button.textContent = "Go right!";
		button.style.marginLeft = "0";
	} else {
		button.textContent = `Go Left!`;
		button.style.marginLeft = "90%";
	}
});
