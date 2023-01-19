const mostRecentScore = localStorage.getItem('mostRecentScore')



const highScoresSecond = JSON.parse(localStorage.getItem('highScoresSecond')) || []




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

        highScoresSecond.push(score)

        highScoresSecond.sort((a, b) => {
            return b.score - a.score
        })

        highScoresSecond.splice(5)

        localStorage.setItem('highScoresSecond', JSON.stringify(highScoresSecond))
        window.location.assign('leaderboard2.html')
    }



