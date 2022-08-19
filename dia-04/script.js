let display = document.querySelector('.display');
let button = document.querySelectorAll('button');

clear();

var current;
button.forEach(function (btn) {
  btn.addEventListener('click', function () {
    let clicked = btn.innerText
    current = clicked
    switch (clicked) {
      case '0':
        show(0)
        break;
      case '1':
        show(1)
        break;
      case '2':
        show(2)
        break;
      case '3':
        show(3)
        break;
      case '4':
        show(4)
        break;
      case '5':
        show(5)
        break;
      case '6':
        show(6)
        break;
      case '7':
        show(7)
        break;
      case '8':
        show(8)
        break;
      case '9':
        show(9)
        break;
      case '.':
        show('.')
        break;

      case 'C':
        clear()
        break;
      case '<':
        dell()
        break;
      case 'x':
        add('*')
        break;
      case '+':
        add('+')
        break;
      case '-':
        add('-')
        break;
      case '=':
        result()
        break;
      case '÷':
        add('/')
        break;

      default:
        toDisplay('ERRO')
        break;
    }

  })
})

function show(number) {
  if (display.innerText.length < 9) {
    if (display.innerHTML == 0) {
      number = number;
    } else {
      number = display.innerHTML += number;
    }

    toDisplay(number)
  }
}

function add(number) {
  if (!isNaN(display.innerText.substr(-1)) || current != display.innerText.substr(-1)) {
    if (isNaN(display.innerText.substr(-1))) {
      number = display.innerText.replace(display.innerText.substr(-1), number)
      display.innerHTML = '';
    }
    display.innerHTML += number;
  }
}

function dell() {
  if (display.innerText.length > 1) {
    number = display.innerText.replace(display.innerText.substr(-1), '')
    display.innerHTML = number;
  } else {
    display.innerHTML = 0;
  }
}

function toDisplay(number) {
  display.innerHTML = number;
}

function clear() {
  toDisplay(0)
}

function result() {
  toDisplay(eval(display.innerText))
}
