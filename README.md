# Multi Color Buttons

## Story

Everybody knows that scouts collect badges.
The more badges you have the more respect you earn.
Now you want to have your first (or next if you are already a scout) scout badge.
And that badge is the `DOM manipulator`.
To earn the badge, you need to finish this project.

## What are you going to learn?

- Manipulating the DOM.
- Understanding the basic syntax of Javascript.

## Tasks

1. The `jumping-button` folder contains the files you need for implementing a "jumping" button. When clicking the button, it goes from the right to the left, and the button text changes to `Go Left!`. When clicking it again, the button goes to the left and the text changes to `Go Right!`.
    - When opening the `jumping-button/index.html` file, there is button is on the left side of its container, with the text `Go Right!`.
    - When the button is on the left side, clicking it results in the button moving to the right side of the container.
    - When the button is on the right side, the button text is `Go Left!`
    - When the button is on the right side, clicking it results in the button moving to the left side of the container.

2. The `change-my-color` folder contains files for implementing a color changing button. When the button in `change-my-color/index.html` is clicked, it must change its background color to red. When clicked again, it switches back its background color to the default value.
    - When the button in `change-my-color/index.html` is clicked, its background color changes to `red`
    - When the button is clicked again, its background color changes back to default.

3. The `change-others-color` folder contains the tools for your next task. When the button in `change-others-color/index.html` is clicked, it changes the background color of the `span` element to `red`.
    - When clicking the button in `change-others-color/index.html`, the element next to it changes its background color to `red`

4. Implement a basic click counter in the `counter` folder. When the button in `counter/index.html` is clicked, the number on it increases by one.
    - Clicking the button in `counter/index.html` increases the number on it by one on each click.

## General requirements

None

## Hints

- Use the `window.addEventListener("load", function(){ })` to write your code.
- Change the class of an element and declare a CSS class for it to change the style of an element, instead of changing the style property directly.
- Use the `element.addEventListener("click", function() {  })` method instead of the `element.onclick = function() {  }` method.
- Get an element by saving and reusing it in a variable like `let button = document.getElementById("myButton")`.
  After that, you can add a new classname to the element using `button.classList.add("newClass")`.
  This tells the `button` variable to refer to the element with the `id` property of `myButton`.

## Background materials

- <i class="far fa-exclamation"></i> [DOM manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- <i class="far fa-exclamation"></i> [Click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
- <i class="far fa-book-open"></i> [What is DOM?](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
