let time = document.querySelector('time')
let hour = "00"
let min = "00"
let sec = "00"

display()

setInterval(counter, 1000)

function counter() {

  verify()
  display()
}

function verify() {
  if (sec < 60) {
    sec++
  } else {
    if (min < 60) {
      min++
    } else {
      if (hour < 24) {
        hour++
      } else {
        sec = "00"
        min = "00"
        hour = "00"
      }
      min = "00"
    }
    sec = "00"
  }
}

function show(number) {
  return number.toString().padStart(2, '0')
}

function display() {
  time.innerHTML = `${show(hour)}:${show(min)}:${show(sec)}`
}