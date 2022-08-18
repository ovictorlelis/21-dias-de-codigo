var mode;
let button = document.querySelector('button')
toggle()

button.addEventListener('click', function () {
  if (mode == 'on') {
    localStorage.setItem('mode', 'off')
  } else {
    localStorage.setItem('mode', 'on')
  }

  toggle()
})


function toggle() {
  let body = document.querySelector('body').classList
  mode = localStorage.getItem('mode')
  if (mode == 'on') {
    button.innerHTML = 'Acender'
    body.add('on')
  } else {
    button.innerHTML = 'Apagar'
    body.remove('on')
  }
}
