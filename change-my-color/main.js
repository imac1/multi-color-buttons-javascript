let button = document.getElementById("change-color");
let defaultColor = button.style.backgroundColor;
let alternateDefault = button.style.backgroundColor
button.addEventListener("click", (event) => {
	defaultColor = button.style.backgroundColor =
		defaultColor === alternateDefault ? "red" : alternateDefault;
});
