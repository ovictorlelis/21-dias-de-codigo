let password = document.querySelector("#generated");
let characters = document.querySelector("#characters");
let uppercase = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");

let copy = document.querySelector("#copy");
let generate = document.querySelector("#generate");

copy.addEventListener("click", function () {
  password.select();
  password.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(password.value);
});

generate.addEventListener("click", function () {
  generated();
});

function hash() {
  let hash = "";
  if (uppercase.checked) {
    hash += "ABCDEFGHIJLMNOPQRSTUVWXYZ";
  }

  if (lowercase.checked) {
    hash += "abcdefghijklmnopqrstuvwxyz";
  }

  if (numbers.checked) {
    hash += "0123456789";
  }

  if (symbols.checked) {
    hash += "!@#$%^&*()+?><:{}[]";
  }

  return hash;
}

function generated() {
  let pass = "";
  for (let i = 0; i < characters.value; i++) {
    let random = Math.floor(Math.random() * hash().length);
    pass += hash().substring(random, random + 1);
  }
  document.getElementById("generated").value = pass;
}
generated();
