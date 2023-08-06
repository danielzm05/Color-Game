let score = document.getElementById('score-counter');
let timer = document.getElementById('timer');
const correctBtn = document.getElementById('correct-btn');
const incorrectBtn = document.getElementById('incorrect-btn');
const textColor = document.getElementById('color-text');
const centerBox = document.getElementById('center-box');


//Audio
let correctSound = new Audio('assets/effects/Correct.mp3')
let incorrectSound = new Audio('assets/effects/Incorrect.mp3')

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
  score.innerText = count
  indexes = generateColor();
}

function resetCounter() {
  incorrectSound.play();

  ShowStats();
  clearInterval(interval);
}

//Función para iniciar timer
function startTimer() {
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    timer.innerText = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }, 1000);
}

//Función show stats
function ShowStats() {
  const statsBox = document.createElement("div");
  statsBox.classList.add('stats-box');
  statsBox.innerHTML = `
    <h1>STATS</h1>
    <div class="stats">
      <p id="player-points"><img src="https://cdn-icons-png.flaticon.com/512/3112/3112946.png" alt="trophy">POINTS: ${score.innerText}</p>
      <p id="player-time"><img src="https://cdn-icons-png.flaticon.com/512/3003/3003126.png" alt="timer">TIME: ${timer.innerText}</p>
    </div>
    <form>
      <label for="nickname">NICKNAME:</label>
      <input type="text" id="nickname" name="nickname">
      <input type="submit" id="login-button" value="SIGN IN">
    </form>
  `
  centerBox.appendChild(statsBox)

  const loginBtn = document.getElementById("login-button");

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault()

    //Guardo el nickname, tiempo y puntos en el localStorage
    const nickname = document.getElementById("nickname").value.trim().toUpperCase();
    if (nickname) {

      let playersList = JSON.parse(localStorage.getItem("playersList")) || [];

      playersList.push({
        nickname: nickname,
        time: timer.innerText,
        points: count
      });

      //Ordeno por puntos y luego por tiempo
      playersList.sort((a, b) => b.points - a.points);
      playersList.sort((a, b) => a.time - b.time);
      localStorage.setItem("playersList", JSON.stringify(playersList));

      //Cambio a la pagina principal
      window.location.href = "../top.html";

    } else {
      alert('Por favor ingresa un nickname');
    }

  });
}