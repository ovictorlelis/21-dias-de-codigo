let btn = document.querySelector('input')
let body = document.querySelector('body')

btn.addEventListener('click', function(){
  body.classList.toggle('dark')
})