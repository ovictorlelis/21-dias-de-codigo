let span = document.querySelector("span");

window.addEventListener("keypress", (event) => {
  span.innerText = event.key;
});
