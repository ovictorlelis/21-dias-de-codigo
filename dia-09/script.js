let loading = document.querySelector("#loading")
let main = document.querySelector("main")

main.classList.add('d-none')

setTimeout(function(){
  loading.classList.add('d-none');
  main.classList.remove('d-none');
}, 2000)