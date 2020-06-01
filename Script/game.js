const cards = document.querySelectorAll('.game-card');

let isFlipped = false;
let firstCard, secondCard;
let lockTheFlip = false;

function flipCard(){

    if(lockTheFlip === true)
        return;
    if(this === firstCard)
        return;

    this.classList.add('flip');

    if(!isFlipped){  /* User's first click */
        isFlipped = true;
        firstCard = this;
        
        return;
    }
    else{
        
        secondCard = this
        
        checkForTheMatch();
    
    }
}


function checkForTheMatch(){
    /* Check whether cards that popped out are matching each other ? */
    if(firstCard.dataset.framework === secondCard.dataset.framework){
        removeCards();
    }
    else{
        unflipCards();
    }        
}


function removeCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetTheBoard();
}


function unflipCards(){

    lockTheFlip = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        resetTheBoard();    
    }, 1000); 
}

function resetTheBoard(){
    [isFlipped, lockTheFlip] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffleTheCards(){
    cards.forEach(card => {
        let randomNumPos = Math.floor(Math.random() * 12);
        card.style.order = randomNumPos; 
    })
})();

cards.forEach(card => card.addEventListener('click', flipCard)); /* To execute the flip card event by listening the 'click' */