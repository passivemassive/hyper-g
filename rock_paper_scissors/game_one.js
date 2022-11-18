const ai = document.getElementById('ai-choice')
console.log(ai)

const user = document.getElementById('your-choice')
const result = document.getElementById('result')
const choices = document.querySelectorAll('button')
const mind = document.getElementById('mind-read')
const win = document.getElementById('win')

let userChoice
let mindChoice
let aiChoice
let count = 0 

document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("win").innerHTML = "Hello World";
}

function generateAiChoiceDumb(params) {      
    const random = Math.floor(Math.random()*choices.length)
    console.log(random)
    if(random === 1){
        aiChoice = 'rock'
    }        
    if(random === 2){
        aiChoice = 'paper'
    }
    if(random === 3){
        aiChoice = 'scissors'
    }
    ai.innerHTML = aiChoice
}


choices.forEach(choice => choice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    user.innerHTML = userChoice        
    generateAiChoiceDumb()
}))

console.log(mindChoice)

choices.forEach(choice => choice.addEventListener('mouseover', (e) =>{
    mindChoice = e.target.id
    mind.innerHTML = mindChoice
}))

win.addEventListener('click' , (e)=>{
    if( typeof mindChoice === "undefined"){
        console.log(mindChoice)
    }
})
