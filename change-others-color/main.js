function buttonClicked() {
	let button = document.getElementById("button");
	button.addEventListener("click", function () {
		document.getElementById("span").classList.toggle("clicked");
	});
}

window.addEventListener("load", buttonClicked);
window.removeEventListener("click", buttonClicked);
