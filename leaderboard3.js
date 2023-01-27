const highScoresList = document.querySelector('#highScoresList')

const highScoresThird = JSON.parse(localStorage.getItem('highScoresThird')) || []


    highScoresList.innerHTML =
        highScoresThird.map(score => {

            return `<li class="high-score">${score.name} - ${score.score}</li>`
        }).join("")

