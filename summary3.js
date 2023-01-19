const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScoresThird = JSON.parse(localStorage.getItem('highScoresThird')) || []

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})




    saveHighScore = e => {
        e.preventDefault()

        const score = {
            score: mostRecentScore,
            name: username.value
        }

        highScoresThird.push(score)

        highScoresThird.sort((a, b) => {
            return b.score - a.score
        })

        highScoresThird.splice(5)

        localStorage.setItem('highScoresThird', JSON.stringify(highScoresThird))
        window.location.assign('leaderboard3.html')
    }



