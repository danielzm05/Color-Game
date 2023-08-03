let rankingList = document.getElementById('ranking-list')
let playersList = JSON.parse(localStorage.getItem("playersList"))

updateRanking()


function updateRanking() {
    playersList.forEach((player) => {
        // Crear celda
        let newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.innerHTML = `
            <div class="player">
            <p class="top-number">${player.topNumber}</p>
            <p class="name">${player.nickname}</p>
            </div>
            <div class="score">
            <p class="time">${player.time}</p>
            <p class="points">${player.points}</pc>
            </div>
        `
        rankingList.appendChild(newCell)
    });
}