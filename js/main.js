const score = document.getElementById('score-counter');
const timer = document.getElementById('timer');
const correctBtn = document.getElementById('correct-btn');
const incorrectBtn = document.getElementById('incorrect-btn');
const textColor = document.getElementById('color-text');

//Audio
let correctSound = new Audio('effects/Correct.mp3')
let incorrectSound = new Audio('effects/Incorrect.mp3')

//Arrays con las posibles opciones de color
const text = ["ROJO", "AMARILLO", "VERDE", "AZUL", "NARANJA", "VIOLETA", "ROSA", "MARRÓN", "NEGRO"];
const colors = ["#EB3B3B", "#F9D923", "#36AE7C", "#187498", "#EB9853", "#913FD4", "#EE9B9B", "#6B4525", "#333333"];

let count = 0;
let seconds = 0;
let minutes = 0;
let interval;
let indexes = generateColor();

//Evento para cuando presiona una de las teclas (RIGHT OR LEFT)
document.addEventListener('keydown', function (event) {
  if (event.code == 'ArrowLeft') {

    correctBtn.style.backgroundColor = '#226E4E'
    if (indexes[0] == indexes[1]) {
      updateCounter()
    } else if (indexes[0] != indexes[1]) {
      resetCounter()
    }

  } else if (event.code == 'ArrowRight') {

    incorrectBtn.style.backgroundColor = '#AB3C3C'
    if (indexes[0] != indexes[1]) {
      updateCounter()

    } else if (indexes[0] == indexes[1]) {
      resetCounter()
    }
  }
});

//Evento para volver al color original cuando suelte la tecla
document.addEventListener('keyup', function (event) {
  if (event.code == 'ArrowRight' || event.code == 'ArrowLeft') {
    correctBtn.style.backgroundColor = ''
    incorrectBtn.style.backgroundColor = ''
  }
});


//Funcion para generar un nuevo color con texto
function generateColor() {
  let i = Math.floor(Math.random() * text.length);
  let j = Math.floor(Math.random() * colors.length);
  textColor.innerText = text[i];
  textColor.style.color = colors[j];

  return [i, j];
}

//Función para actualizar el contador
function updateCounter() {
  if (count == 0) {
    startTimer();
  }
  correctSound.play();
  count++
  score.innerText = "+" + count
  indexes = generateColor();
}

function resetCounter() {
  incorrectSound.play();
  alert("YOU LOSE: PTS:" + count + " TIME: " + minutes + ":" + seconds);
  count = 0
  score.innerText = "00"
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  timer.innerHTML = '00:00';


}

//Función para iniciar timer
function startTimer() {
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    timer.innerHTML = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }, 1000);
}
