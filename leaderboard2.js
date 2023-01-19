const highScoresList = document.querySelector('#highScoresList')

const highScoresSecond = JSON.parse(localStorage.getItem('highScoresSecond')) || []



    highScoresList.innerHTML =
        highScoresSecond.map(score => {

            return `<li class="high-score">${score.name} - ${score.score}</li>`
        }).join("")
