var previousScores = JSON.parse(localStorage.getItem("player-scores")) || []

previousScores.forEach(element => {
    console.log(element)
    var liElement = document.createElement("li")
    liElement.textContent = element.initials + " - " + element.score
    document.getElementById("player-score-list").append(liElement)

});

function clearScores() {
    localStorage.removeItem("player-scores")
    window.location.reload()
}

document.getElementById("clear-scores").onclick = clearScores;