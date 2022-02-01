
document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'evil',
            img: 'src/images/evil.png'
        },
        {
            name: 'keerby',
            img: 'src/images/keerby.png'
        },
        {
            name: 'me',
            img: 'src/images/me.png'
        },
        {
            name: 'smol',
            img: 'src/images/smol.png'
        },
        {
            name: 'uh',
            img: 'src/images/uh.png'
        },
        {
            name: 'yeah',
            img: 'src/images/yeah.png'
        },
        {
            name: 'evil',
            img: 'src/images/evil.png'
        },
        {
            name: 'keerby',
            img: 'src/images/keerby.png'
        },
        {
            name: 'me',
            img: 'src/images/me.png'
        },
        {
            name: 'smol',
            img: 'src/images/smol.png'
        },
        {
            name: 'uh',
            img: 'src/images/uh.png'
        },
        {
            name: 'yeah',
            img: 'src/images/yeah.png'
        },
    ]

    
    cardArray.sort(() => 0.5 - Math.random())
    console.log(cardArray)

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
           const card =  document.createElement('img')
           card.setAttribute('src', 'src/images/blank2.png')
           card.setAttribute('data-id', i)
           card.addEventListener('click', flipCard)
           grid.appendChild(card)
        } 
    }


    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500) 
        }
        console.log(cardsChosenIds)
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]

        if (optionOneId == optionTwoId) {
            alert('You have clicked the same image')
            cards[optionOneId].setAttribute('src', 'src/images/blank2.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank2.png')
        } else if (cardsChosen[0] === cardsChosen[1]){
            alert('Yey, you found it')
            cards[optionOneId].setAttribute('src', 'src/images/white.png')
            cards[optionTwoId].setAttribute('src', 'src/images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'src/images/blank2.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank2.png')
            alert('Nope, try again')
        }
        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.innerHTML = cardsWon.length
        if (cardsWon.length === cardArray.length / 2){
            resultDisplay.innerHTML = 'Well congrats, you smartass'
        }

        console.log(cardsChosen)
        console.log(cardsWon)
    }
    
       
    createBoard()
})

