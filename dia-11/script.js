let loading = document.querySelector('#loading')
let main = document.querySelector('main')
let button = document.querySelector('button')

loading.classList.add('d-none')

button.addEventListener('click', function(){
  loading.classList.remove('d-none')
  main.classList.add('d-none')
})

