// console.log(parseInt(Math.random()*100 +1))

let randomNumber=(parseInt(Math.random()*100 +1))
let submit=document.querySelector('#subt')
let userInput=document.querySelector('#guessField')
let guessSlot=document.querySelector(".guesses")
let remaining=document.querySelector('.lastResult')
let lowOrHi= document.querySelector('.lowOrHi')
let startOver=document.querySelector('.resultParas')
let p =document.createElement('p')
let previousGuess=[]
let numberGuesses=1
let playGame=true;


if(playGame){
    submit.addEventListener('click',function (e) {
        e.preventDefault()
        let guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
        
    })
}

function validateGuess(guess) {
   if(isNaN(guess)){
    alert("Please enter a valid number")
   } 
   else if (guess < 1) {
    alert("Please enter a number more than 1")
   } 
   else if(guess > 100){
    alert("Please enter a number less than 100")
   } 
   else {
    previousGuess.push(guess)
    if(numberGuesses === 11){
        displayGuess(guess)
        displayMessage(`Game Over.Random number was ${randomNumber}`)
        endGame()
    } 
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
   }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame()
        } 
        else if (guess < randomNumber){
            displayMessage(`Number is too Low`)
        } 
        else if (guess > randomNumber){
        displayMessage(`Number is too High`)
    }
      
}

 function displayGuess(guess) {
    userInput.value=''
    guessSlot.innerHTML+=`${guess}  ,   `
    numberGuesses++
    remaining.innerHTML=`${11-numberGuesses}`
 }
 
function displayMessage(message) {
 lowOrHi.innerHTML=`<h2>${message}</h2> `  
}

function endGame() {
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`1<h3 id='newGame'>Start a new Game</h3>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}
function newGame() {
   let newGameButton=document.querySelector('#newGame')
   newGameButton.addEventListener('click',function(e) {
    randomNumber=(parseInt(Math.random()*100 +1))
    previousGuess=[]
    numberGuesses=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numberGuesses}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true
    
   }) 
}