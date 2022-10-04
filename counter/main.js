function bttnClicked() {
	let button = document.getElementById("count");
	let click = 0;
	button.addEventListener("click", (event) => {
		click += 1;
		button.innerHTML = click;
		console.log(click);
	});
}

window.addEventListener("load", bttnClicked);
window.removeEventListener('click', bttnClicked)
