const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let title = document.getElementsByTagName("title")[0].innerHTML;

let questions = [
    {
        question: 'Ile to 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
    },
    {
        question:
            "W ktorym miescie znajduje się najwyższy budynek świata?",
        choice1: "Dubai",
        choice2: "New York",
        choice3: "Shanghai",
        choice4: "None of the above",
        answer: 1,
    },
    {
        question: "Przez Które z tych państw przeplywa Amazonka",
        choice1: "Argentyna",
        choice2: "Meksyk",
        choice3: "Kongo",
        choice4: "Peru",
        answer: 4,
    },
    {
        question: "Stal to stop żelaza z:",
        choice1: "Miedzią",
        choice2: "Węglem",
        choice3: "Cynkiem",
        choice4: "Tytanem",
        answer: 2,
    }
]

let secondQuestions = [
    {
        question: 'Ile lat ma Maryla Rodowicz?',
        choice1: '63',
        choice2: '77',
        choice3: '82',
        choice4: '54',
        answer: 2,
    },
    {
        question: "Ile to 2-2?",
        choice1: "0",
        choice2: "5",
        choice3: "11",
        choice4: "8",
        answer: 1,
    },
    {
        question: "Jak nazywa się japońska sztuka układania kwiatów?",
        choice1: "Ikebana",
        choice2: "Feng shui",
        choice3: "Origami",
        choice4: "Tai chi",
        answer: 1,
    },
    {
        question: "Linie na powierzchni Ziemi, przechodząca przez obserwatorium w Greenwich to:?",
        choice1: "równik",
        choice2: "zwrotnik koziorożca",
        choice3: "zwrotnik raka",
        choice4: "południk zerowy",
        answer: 4,
    }
]

let thirdQuestions = [
    {
        question: 'W jakich latach toczyła się druga wojna światowa?',
        choice1: '1617-1622',
        choice2: '1914-1918',
        choice3: '1897-1903',
        choice4: '1939-1945',
        answer: 4,
    },
    {
        question: "Kto był pierwszym koronowanym królem polski?",
        choice1: "Bolesław Chrobry",
        choice2: "Mieszko I",
        choice3: "Władysław Jagiełło",
        choice4: "Władysław Łokietek",
        answer: 1,
    },
    {
        question: "Czerwony w języku angielskim to...",
        choice1: "Brown",
        choice2: "Blue",
        choice3: "Green",
        choice4: "Red",
        answer: 4,
    },
    {
        question: "Kto 6 sierpnia 2015 roku stał się prezydentem Polski?",
        choice1: "Bronisław Komorowski",
        choice2: "Andrzej Duda",
        choice3: "Paweł Kukiz",
        choice4: "Anna Grodzka",
        answer: 2,
    }
]



const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startFirstGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

startSecondGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...secondQuestions]
    getNewQuestion()
}
startThirdGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...thirdQuestions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        if (title === "Quiz 1"){
            return window.location.assign('summary1.html')
        } else if (title === "Quiz 2"){
            return window.location.assign('summary2.html')
        } else if (title === "Quiz 3"){
            return window.location.assign('summary3.html')
        }


    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}
if (title === "Quiz 1"){
    startFirstGame()
} else if (title === "Quiz 2"){
    startSecondGame()
} else if (title === "Quiz 3"){
    startThirdGame()
}

