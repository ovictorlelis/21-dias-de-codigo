let icons = document.querySelectorAll(".icon");
let codes = document.querySelectorAll(".code");

icons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    copy(icon);
  });
});

codes.forEach(function (code) {
  code.addEventListener("click", function () {
    copy(code);
  });
});

function copy(item) {
  navigator.clipboard.writeText(item.innerHTML);
}
