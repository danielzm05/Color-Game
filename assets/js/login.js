const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", (e) => {
    e.preventDefault()

    //Guardo el nickname, tiempo y puntos en el localStorage
    const nickname = document.getElementById("nickname").value.trim().toUpperCase();
    if (nickname) {

        let playersList = JSON.parse(localStorage.getItem("playersList")) || [];

        playersList.push({
            topNumber: playersList.length + 1,
            nickname: nickname,
            time: "00:00",
            points: 0,
        });
        localStorage.setItem("playersList", JSON.stringify(playersList));

        //Cambio a la pagina principal
        window.location.href = "../index.html";

    } else {
        alert('Por favor ingresa un nickname');
    }

});
