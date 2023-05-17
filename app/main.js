const advices = 'https://api.adviceslip.com/advice'

let btnDice = document.getElementById('dice').addEventListener('click', showAdvice)
let advicetxt = document.getElementById('advice')
let idAdvice = document.getElementById('id')

async function showAdvice(){
    const response = await fetch(advices)
    const data = await response.json()

     let advice = data.slip.advice
     let id = data.slip.id

     idAdvice.innerText = `${id}`
     advicetxt.innerText = `${advice}`
}

showAdvice()


