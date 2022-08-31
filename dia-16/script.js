let zipcode = document.querySelector("input");
let btn = document.querySelector("#search");
let btnNew = document.querySelector("#new");
let form = document.querySelector("form");
let message = document.getElementById("message");
let info = document.getElementById("info");

btn.addEventListener("click", function () {
  search();
});

btnNew.addEventListener("click", function () {
  message.innerText = "";
  info.style.display = "none";
  form.style.display = "block";
});

function show(data) {
  if (!("erro" in data)) {
    console.log(data);
    info.style.display = "block";
    message.innerText = "";
    document.getElementById("zip").innerText = data.cep;
    document.getElementById("ddd").innerText = data.ddd;
    document.getElementById("city").innerText = data.localidade;
    document.getElementById("neighborhood").innerText = data.bairro;
    document.getElementById("road").innerText = data.logradouro;
  } else {
    message.innerText = "CEP não encontrado.";
  }
}

function search() {
  var zip = zipcode.value.replace(/\D/g, "");

  if (zip != "") {
    var validate = /^[0-9]{8}$/;

    if (validate.test(zip)) {
      form.style.display = "none";
      message.innerText = "Carregando...";

      var script = document.createElement("script");

      script.src = "https://viacep.com.br/ws/" + zip + "/json/?callback=show";

      document.body.appendChild(script);
    } else {
      message.innerText = "CEP inválido";
      form.style.display = "block";
    }
  } else {
    message.innerText = "Digite um CEP";
  }
}
